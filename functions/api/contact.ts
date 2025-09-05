// /functions/api/contact.ts
export const onRequestPost: PagesFunction<{
  TURNSTILE_SECRET_KEY?: string
}> = async (context) => {
  const { request, env } = context;

  const formData = await request.formData();
  // basic honeypot
  if ((formData.get('website') as string)?.trim()) {
    return new Response('OK', { status: 200 }); // ignore bots silently
  }

  // Optional Turnstile verify
  const cfToken = formData.get('cf-turnstile-response') as string | null;
  if (env.TURNSTILE_SECRET_KEY && cfToken) {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: cfToken })
    }).then(r => r.json());
    if (!verifyRes.success) return new Response('Forbidden', { status: 403 });
  }

  // Extract fields
  const name = (formData.get('name') as string || '').slice(0, 200);
  const email = (formData.get('email') as string || '').slice(0, 200);
  const message = (formData.get('message') as string || '').slice(0, 5000);

  // TODO: integrate with your email/provider/logging.
  // For now just log (visible in Pages logs).
  console.log('[Contact]', { name, email, message });

  return new Response('OK', { status: 200 });
};
