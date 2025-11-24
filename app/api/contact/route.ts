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

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
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

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'no-reply@resend.dev',
      to,
      reply_to: email,
      subject,
      html,
    });

    if ((result as any)?.error) {
      const errorMessage = (result as any).error?.message || 'Email failed';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


