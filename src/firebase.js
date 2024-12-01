// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// TODO: Under Project Settings > API Key Restrictions, restrict your apiKey to specific web domains after hosting. !!!!!!!!
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYFBr68kzFdQIPZSlM1bmEzMCV8c8SOJc",
  authDomain: "zenith-ai-8769c.firebaseapp.com",
  projectId: "zenith-ai-8769c",
  storageBucket: "zenith-ai-8769c.firebasestorage.app",
  messagingSenderId: "526708377589",
  appId: "1:526708377589:web:9c770f16b010a6aa0d02bc",
  measurementId: "G-CX96S4Z63K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Authentication
const auth = getAuth(app);
const db = getFirestore(app);

// Need the authentication for admin access to write to firestore
export { auth, db };