import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Hookon Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "Nová zpráva z hookon.ai",
      text: [
        `Jméno: ${name || "-"}`,
        `Email: ${email}`,
        "",
        "Zpráva:",
        message,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
