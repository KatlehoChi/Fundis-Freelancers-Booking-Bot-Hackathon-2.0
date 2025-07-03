import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Reference your target service category
const category = "Cleaning"; // ⚠️ Change this per page!

// Target HTML container
const container = document.querySelector("#fundi-list");

// Fetch and display fundis
async function loadFundis() {
  const querySnapshot = await getDocs(collection(db, "fundis"));
  querySnapshot.forEach(doc => {
    const fundi = doc.data();
    if (fundi.category === category) {
      const card = document.createElement("div");
      card.className = "fundi-card";
      card.innerHTML = `
        <img src="${fundi.photoURL || 'assets/default.jpg'}" alt="${fundi.name}" />
        <h3>${fundi.name}</h3>
        <p>${fundi.bio}</p>
        <p><strong>Contact:</strong> ${fundi.contact}</p>
        <p><strong>Location:</strong> ${fundi.location}</p>
      `;
      container.appendChild(card);
    }
  });
}

loadFundis();