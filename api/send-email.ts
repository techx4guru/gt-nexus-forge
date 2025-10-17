import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, type } = req.body;

    console.log('📧 Email request received:', { name, email, type });

    if (!name || !email || !message) {
      console.error('❌ Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailData = await resend.emails.send({
      from: 'GT Website <no-reply@gth.guru>',
      to: ['onisurutejiritj@gmail.com'],
      subject: type === 'collaboration'
        ? `🤝 Collaboration Request from ${name}`
        : `📬 Message from ${name}`,
      html: `
        <h2>${type === 'collaboration' ? 'New Collaboration Request' : 'New Contact Message'}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p>Sent from <a href="https://gth.guru">gth.guru</a></p>
      `,
    });

    console.log('✅ Email sent successfully:', emailData);

    return res.status(200).json({ success: true, id: emailData.id });
  } catch (error: any) {
    console.error('❌ Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
