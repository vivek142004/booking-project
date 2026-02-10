import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Backend OK ✅");
});

// EMAIL SETUP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// BOOKING API
app.post("/booking", async (req, res) => {
  
const { service, name, email, phone, message } = req.body;
  console.log("FULL BODY:", req.body);
  console.log("MESSAGE FROM USER:", message);

  if (!service || !name || !email || !phone) {
    return res.status(400).json({ message: "Missing fields" });
  }

  sznaizlhaqsbkrun// email code here
});



  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New Booking",
      text: `
Service: ${service}
Name: ${name}
Email: ${email}
Phone: ${phone}
Requirement: ${message}
      `,
    });

    console.log("✅ Email sent");
    res.json({ message: "Booking successful ✅" });

  } catch (err) {
    console.error("❌ EMAIL ERROR:", err);
    res.status(500).json({
      message: "Booking failed ❌",
      error: err.message,
    });
  }
;

// SERVER
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
