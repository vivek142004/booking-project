const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// ✅ MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔐 EMAIL CONFIG
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vishwakarmaenterprise@6068@gmail.com",        // 👈 same email
    pass: "Enterprises@6068"            // 👈 Gmail App Password
  }
});

// ✅ HOME ROUTE (ALWAYS BEFORE listen)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// 📩 BOOKING ROUTE
app.post("/booking", async (req, res) => {
  const { service, name, phone } = req.body;

  console.log("BOOKING DATA:", req.body); // 👈 DEBUG

  if (!service || !name || !phone) {
    return res.status(400).json({ message: "All fields required ❌" });
  }

  try {
    await transporter.sendMail({
      from: `"Booking Website" <vishwakarmaenterprise@6068@gmail.com>`,
      to: "vishwakarmaenterprise@6068@gmail.com", // 👈 same email
      subject: "📩 New Booking Received",
      html: `
        <h2>New Booking</h2>
        <p><b>Service:</b> ${service}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
      `
    });

    res.json({ message: "Booking successful & email sent ✅" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ message: "Email sending failed ❌" });
  }
});

// 🚀 SERVER (ALWAYS LAST)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
