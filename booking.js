console.log("BOOKING JS LOADED ✅");

document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  console.log("📤 Sending booking:", { service, name, email, phone, message });

  if (!service || !name || !email || !phone) {
    document.getElementById("messageg").innerText = "❌ Please fill required fields";
    return;
  }

  try {
    const res = await fetch(
      "https://booking-backend-mail.vercel.app/booking",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, name, email, phone, message })
      }
    );

    const data = await res.json();

    document.getElementById("msg").innerText =
      data.message || "✅ Booking successful!";
    document.getElementById("msg").style.color = "green";

    document.getElementById("bookingForm").reset();
  } catch (err) {
    console.error(err);
    document.getElementById("msg").innerText = "❌ Server error";
    document.getElementById("msg").style.color = "red";
  }
});

function openBooking(serviceName) {
  document.getElementById("service").value = serviceName;
  document.getElementById("bookingForm")
    .scrollIntoView({ behavior: "smooth" });
}
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
      body: JSON.stringify({ service, name, email, phone  })
    });

    const message = document.getElementById("message").value;

       body: JSON.stringify({ service, name,  email,  phone,  message});
 

    const data = await res.json();
    document.getElementById("msg").innerText = data.message;

  } catch (err) {
    console.error(err);
    document.getElementById("msg").innerText = "❌ Server error";
  }
});
 e8e7540400873ce180dab584cfcd980bde18466
