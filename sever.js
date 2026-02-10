const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/booking", (req, res) => {
  const { service, name, email, phone } = req.body;

  if (!service || !name || !email || !phone) {
    return res.status(400).json({ message: "❌ All fields required" });
  }

  console.log("📥 New booking received:", { service, name, email, phone });
  res.json({ message: `✅ Booking confirmed for ${service}, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});