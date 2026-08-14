import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER || "yashwantrajput989@gmail.com";
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || "vrlc dpyu chwr ghle").replace(/\s+/g, "");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // 1. Send notification to Yashwant's inbox
    await transporter.sendMail({
      from: `"Portfolio Agent" <${gmailUser}>`,
      to: gmailUser,
      subject: `⚡ New Contact Details Request from ${name || email}`,
      html: `
        <div style="font-family: monospace; background: #0B0F14; color: #EAF2F5; padding: 24px; border-radius: 12px; border: 1px solid #4FD8E8;">
          <h2 style="color: #4FD8E8; margin-top: 0;">⚡ New Portfolio Lead</h2>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Visitor Email:</strong> <a href="mailto:${email}" style="color: #F2A65A;">${email}</a></p>
          <p style="color: #8CA0AC; font-size: 12px;">This visitor requested your direct phone number & WhatsApp contact details via your portfolio.</p>
        </div>
      `,
    });

    // 2. Send confirmation email directly to the visitor
    await transporter.sendMail({
      from: `"Yashwant Singh" <${gmailUser}>`,
      to: email,
      subject: `Yashwant Singh — Direct Contact Details & WhatsApp Access`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #0B0F14; color: #EAF2F5; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #4FD8E8;">
          <h2 style="color: #4FD8E8; margin-top: 0;">Hello ${name || "there"},</h2>
          <p style="color: #8CA0AC; font-size: 15px; line-height: 1.6;">
            Thank you for connecting through my portfolio! Feel free to reach out to me directly through phone call, text, or WhatsApp:
          </p>

          <div style="background: #131A22; padding: 20px; border-radius: 8px; border-left: 4px solid #F2A65A; margin: 20px 0;">
            <p style="margin: 8px 0; font-size: 15px;"><strong>📞 Phone / Call / SMS:</strong> <a href="tel:+919876543210" style="color: #4FD8E8;">+91 9876543210</a></p>
            <p style="margin: 8px 0; font-size: 15px;"><strong>💬 WhatsApp:</strong> <a href="https://wa.me/919876543210" style="color: #F2A65A; text-decoration: none; font-weight: bold;">Chat on WhatsApp →</a></p>
            <p style="margin: 8px 0; font-size: 15px;"><strong>📧 Email:</strong> <a href="mailto:yashwantrajput989@gmail.com" style="color: #4FD8E8;">yashwantrajput989@gmail.com</a></p>
            <p style="margin: 8px 0; font-size: 15px;"><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/yashwant-singh-rajput-50a56924b" style="color: #4FD8E8;">linkedin.com/in/yashwant-singh-rajput</a></p>
          </div>

          <p style="color: #8CA0AC; font-size: 14px;">
            I look forward to discussing Agentic AI engineering, RAG pipelines, and multi-agent architectures!
          </p>

          <br/>
          <p style="color: #EAF2F5; font-weight: bold; margin-bottom: 0;">Best regards,</p>
          <p style="color: #4FD8E8; margin-top: 4px; font-weight: bold;">Yashwant Singh</p>
          <p style="color: #8CA0AC; font-size: 12px; margin-top: 0;">Associate Data & AI Lead | Full-Stack Agentic AI Engineer</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully via Gmail SMTP!" });
  } catch (error: any) {
    console.error("Nodemailer Gmail SMTP error:", error);
    return NextResponse.json({ error: error?.message || "Failed to send email" }, { status: 500 });
  }
}
