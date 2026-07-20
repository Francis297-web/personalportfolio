// Add this to js/main.js (or its own file, linked after the DOM),
// and make sure your #contact-form inputs stay in this order:
// name, email, subject, message.

// Point this at your backend once it's deployed, e.g.
// "https://your-backend.onrender.com/send-message"
const CONTACT_API_URL = "http://localhost:5000/send-message";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input, textarea");
  const [nameInput, emailInput, subjectInput] = inputs;
  const messageInput = form.querySelector("textarea");
  const submitBtn = form.querySelector("button[type='submit']");

  // status message shown under the form
  const statusEl = document.createElement("p");
  statusEl.className = "contact-form-status";
  statusEl.style.marginTop = "10px";
  statusEl.style.fontSize = "0.9rem";
  form.appendChild(statusEl);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusEl.textContent = "";

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.ok) {
        statusEl.style.color = "#2ecc71";
        statusEl.textContent = "Message sent! I'll get back to you soon.";
        form.reset();
      } else {
        statusEl.style.color = "#e74c3c";
        statusEl.textContent = data.error || "Something went wrong. Please try again.";
      }
    } catch (err) {
      statusEl.style.color = "#e74c3c";
      statusEl.textContent = "Couldn't reach the server. Please try again later.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});
