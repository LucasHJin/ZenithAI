import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; // Importing from Firebase Configuration

async function adminWriteData(data) {
    // Retrieving admin information from .env
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    // Trying to write
    try {
        // Try to sign in
        const userCredential = await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        if (userCredential) {
            // Successfully authenticated
            const docRef = await addDoc(collection(db, "TESTING"), data); // Client side writing (not admin)
            console.log("Document written with ID: ", docRef.id);
        }
    } catch (error) {
        console.error("Error: Admin authentication failed or write denied", error);
    }
}

export { adminWriteData };