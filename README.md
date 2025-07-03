# 🧰 FundiConnect – Local Service Platform

**FundiConnect** is a web-based platform designed to connect communities with skilled service providers (“fundis”) in categories like Cleaning, Tech Help, Catering, Tailoring, and more. It features a multi-page frontend, styled booking flows, WhatsApp integration, and real-time data powered by Firebase Firestore.

---

## 📌 Project Highlights

- Multi-page frontend with clean navigation
- Booking and registration forms for users and fundis
- Firebase Firestore integration for live data storage
- Dynamic display of fundi profiles by category
- WhatsApp confirmation trigger for bookings
- Netlify-ready static deployment

---

## 🗂️ Folder Structure

---

## 🧠 Technologies Used

- **HTML5 / CSS3**
- **JavaScript (ES Modules)**
- **Firebase Firestore**
- **WhatsApp API Trigger**
- **Netlify (for deployment)**

---

## 🔧 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/fundi-connect.git

**Set up Firebase**
- **Create a Firebase project at firebase.google.com**
- **Enable Firestore**
- **Get your Firebase config and paste into js/firebase.js**
- **Include Firebase SDK in HTML files**
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"></script>
<script type="module" src="js/firebase.js"></script>


## Project Walkthrough
🔹 **Booking Flow**
- User completes booking.html form
- Submission saved to Firestore in bookings collection
- Redirect to confirm.html where WhatsApp trigger contacts 0673523716
🔹 Fundi Registration
- Fundi uses register.html to submit profile
- Data stored in fundis collection
- fundis.js pulls profiles dynamically into category pages

✨ **Future Enhancements**
- Profile photo upload using Firebase Storage
- Search and filter fundis by location/service
- Admin approval dashboard
- Booking status tracker with confirmation updates
- SMS or email notification system






