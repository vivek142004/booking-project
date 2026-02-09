console.log("BOOKING JS LOADED ✅");

document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  console.log("📤 Sending booking:", { service, name, email, phone });

  if (!service || !name || !email || !phone) {
    document.getElementById("msg").innerText = "❌ All fields required";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ service, name, email, phone })
    });

    const data = await res.json();
    document.getElementById("msg").innerText = data.message;

  } catch (err) {
    console.error(err);
    document.getElementById("msg").innerText = "❌ Server error";
  }
});
