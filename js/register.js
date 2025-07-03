import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fundi = {
    name: form.fundiName.value.trim(),
    contact: form.contact.value.trim(),
    email: form.email.value.trim(),
    category: form.service.value,
    availability: form.availability.value.trim(),
    location: form.location.value.trim(),
    bio: form.bio.value.trim(),
    photoURL: "", // Optional — future: upload or collect image URL
    registeredAt: new Date()
  };

  try {
    await addDoc(collection(db, "fundis"), fundi);
    alert("Registration complete! You're now listed on FundiConnect.");
    form.reset(); // Optional: clears the form
  } catch (error) {
    console.error("Registration error:", error);
    alert("Something went wrong — please try again.");
  }
});