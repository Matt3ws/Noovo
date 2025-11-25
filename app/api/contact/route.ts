import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const firstName = (data.firstName || '').trim();
    const lastName = (data.lastName || '').trim();
    const email = (data.email || '').trim();
    const projectType = (data.projectType || '').trim();
    const message = (data.message || '').trim();
    const recaptchaToken = (data.recaptchaToken || '').trim();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Verify reCAPTCHA v3 token (unless explicitly skipped with env)
    const skipRecaptcha = process.env.RECAPTCHA_SKIP_VERIFY === 'true';
    if (!skipRecaptcha) {
      if (!recaptchaToken) {
        return NextResponse.json({ error: 'reCAPTCHA token missing' }, { status: 400 });
      }
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
      if (!recaptchaSecret) {
        return NextResponse.json({ error: 'reCAPTCHA not configured' }, { status: 500 });
      }
      const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip')?.trim() ||
        undefined;
      const params = new URLSearchParams();
      params.set('secret', recaptchaSecret);
      params.set('response', recaptchaToken);
      if (ip) params.set('remoteip', ip);
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      const verifyJson = (await verifyRes.json()) as {
        success: boolean;
        score?: number;
        action?: string;
        hostname?: string;
        'error-codes'?: string[];
      };
      if (!verifyJson.success) {
        const codes = verifyJson['error-codes']?.join(', ') || 'verification_failed';
        return NextResponse.json({ error: `reCAPTCHA failed (${codes})` }, { status: 400 });
      }
      const minScore = Number(process.env.RECAPTCHA_MIN_SCORE || '0.5');
      if (typeof verifyJson.score === 'number' && verifyJson.score < minScore) {
        return NextResponse.json({ error: 'reCAPTCHA score too low' }, { status: 400 });
      }
      if (verifyJson.action && verifyJson.action !== 'contact') {
        return NextResponse.json({ error: 'Invalid reCAPTCHA action' }, { status: 400 });
      }
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json({ error: 'Recipient not configured' }, { status: 500 });
    }

    const subject = `Ny kontaktform forespørgsel fra ${firstName} ${lastName}`.trim();
    const html = `
      <div>
        <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
        <p><strong>E‑mail:</strong> ${email}</p>
        <p><strong>Projekttype:</strong> ${projectType || '-'}</p>
        <p><strong>Besked:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'no-reply@resend.dev',
      to,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      const errorMessage = error.message || 'Email failed';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
