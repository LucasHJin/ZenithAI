import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Importing from Firebase Config

async function adminWriteData(data) {
    // Retrieving admin information from .env
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    // Trying to write
    try {
        // Try to sign in
        const userCredential = await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        if (userCredential) {
        // Successfully authenticated, proceed with Firestore write
            const docRef = await db.collection("TESTING").add(data);
        }
    } catch (error) {
        console.error("Error: Admin authentication failed or write denied", error);
    }
}

export { adminWriteData };