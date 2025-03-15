// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; // Import Auth
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVPMEyPKqEuic6uSV48AUycDald94Gqo",
  authDomain: "unipod-management.firebaseapp.com",
  projectId: "unipod-management",
  storageBucket: "unipod-management.firebasestorage.app",
  messagingSenderId: "347626598563",
  appId: "1:347626598563:web:7f2ce85d849bad96830f16",
  measurementId: "G-0LCMERXLWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app); // Initialize Firestore

// Export Firebase services for use in your app
export { app, analytics, auth, db };
