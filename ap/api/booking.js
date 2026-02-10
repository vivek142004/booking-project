import nodemailer from "nodemailer";

export default async function handler(req, res) {

  // ❌ browser GET block
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { service, name, phone } = req.body;

  if (!service || !name || !phone) {
    return res.status(400).json({ message: "All fields required ❌" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Booking Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Booking Received",
      html: `
        <h2>New Booking</h2>
        <p><b>Service:</b> ${service}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
      `
    });

    return res.status(200).json({
      message: "Booking successful & email sent ✅"
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({
      message: "Email sending failed ❌"
    });
  }
}
app.get("/test-whatsapp", async (req, res) => {
  await client.messages.create({
    from: "whatsapp:+14155238886",
    to: "whatsapp:+918169758692", // wahi number jo join kiya
    body: "✅ WhatsApp sandbox connected successfully"
  });
  res.send("WhatsApp sent");
});
