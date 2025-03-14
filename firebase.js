// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
        
export { app};
