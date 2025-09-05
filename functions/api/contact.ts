// Cloudflare Pages Function: POST /api/contact
// Validates input, (optional) verifies Turnstile, then emails via Resend.

type Env = {
  RESEND_API_KEY: string;         // set in Cloudflare Pages → Settings → Environment variables
  CONTACT_TO: string;             // who receives the leads (your inbox)
  CONTACT_FROM?: string;          // e.g. "SwiftSite <noreply@yourdomain.com>" (Resend domain recommended)
  TURNSTILE_SECRET?: string;      // optional, if you enable Turnstile
};

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  try {
    const { request, env } = ctx;
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return json({ ok: false, error: "Invalid content type" }, 415);
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      cfTurnstileToken?: string; // optional if you enable Turnstile
    };

    // Basic validation
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    if (!name || !email || !message) {
      return json({ ok: false, error: "All fields are required." }, 400);
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return json({ ok: false, error: "Invalid email." }, 400);
    }

    // Optional: Turnstile verification (only if TURNSTILE_SECRET is set and token provided)
    if (env.TURNSTILE_SECRET && body.cfTurnstileToken) {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET,
          response: body.cfTurnstileToken,
          remoteip: ctx.request.headers.get("CF-Connecting-IP") || "",
        }),
      }).then((r) => r.json() as Promise<{ success: boolean; "error-codes"?: string[] }>);

      if (!verify.success) {
        return json({ ok: false, error: "Spam check failed." }, 400);
      }
    }

    // Compose email (Resend)
    const to = env.CONTACT_TO;
    if (!env.RESEND_API_KEY || !to) {
      return json({ ok: false, error: "Server not configured." }, 500);
    }

    const from = env.CONTACT_FROM || "SwiftSite <noreply@example.com>";
    const subject = `New message via SwiftSite: ${name}`;
    const text =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `— Sent ${new Date().toISOString()}`;

    const html = `
      <table style="width:100%;max-width:640px;font-family:Inter,Arial,sans-serif">
        <tr><td><h2 style="margin:0 0 8px">New SwiftSite message</h2></td></tr>
        <tr><td style="color:#111"><strong>Name:</strong> ${escapeHtml(name)}</td></tr>
        <tr><td style="color:#111"><strong>Email:</strong> ${escapeHtml(email)}</td></tr>
        <tr><td style="padding-top:12px;color:#111"><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g,"<br/>")}</td></tr>
        <tr><td style="padding-top:16px;color:#667085;font-size:12px">Sent ${new Date().toISOString()}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({ from, to, subject, text, html }),
    });

    if (!res.ok) {
      const err = await safeJson(res);
      return json({ ok: false, error: "Email service error", details: err }, 502);
    }

    return json({ ok: true });
  } catch (e: any) {
    return json({ ok: false, error: "Unexpected error", details: e?.message || String(e) }, 500);
  }
};

// Helpers
function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
async function safeJson(res: Response) {
  try { return await res.json(); } catch { return await res.text(); }
}
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
