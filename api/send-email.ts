// /api/send-email.ts
import type { IncomingMessage, ServerResponse } from "http";

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse & { statusCode?: number; end: (data?: any) => void }) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const { name, email, message, type } = req.body;

    if (!name || !email || !message) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "Missing required fields" }));
      return;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GT Website <no-reply@gth.guru>",
        to: ["onisurutejiritj@gmail.com"],
        subject:
          type === "collaboration"
            ? `🤝 Collaboration Request from ${name}`
            : `📬 Message from ${name}`,
        html: `
          <h2>${type === "collaboration" ? "New Collaboration Request" : "New Contact Message"}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p>Sent from <a href="https://gth.guru">gth.guru</a></p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Resend API request failed");
    }

    res.statusCode = 200;
    res.end(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Email send error:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to send email" }));
  }
}
