import { db } from "./firebase.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Select the form
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload

  // Get values from the form
  const name = form.fullName.value.trim();
  const contact = form.contact.value.trim();
  const category = form.category.value;
  const provider = form.provider.value.trim();
  const date = form.date.value;
  const location = form.location.value.trim();
  const notes = form.notes.value.trim();

  try {
    await addDoc(collection(db, "bookings"), {
      name,
      contact,
      category,
      provider,
      date: Timestamp.fromDate(new Date(date)),
      location,
      notes,
      submittedAt: Timestamp.now()
    });

    // Redirect to confirmation page
    window.location.href = "confirm.html";
  } catch (error) {
    console.error("Error saving booking:", error);
    alert("Something went wrong. Please try again.");
  }
});