import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc} from "firebase/firestore";
import { auth, db } from "../firebase"; // Importing from Firebase Configuration

async function adminWriteData(data, coll, docId=null) {
    // Retrieving admin information from .env
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    // Trying to write
    try {
        // Try to sign in
        const userCredential = await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        if (userCredential) {
            // Successfully authenticated
            if (docId === null) {
                const docRef = await addDoc(collection(db, coll), data); // Client side writing (not admin)
                console.log("Document written with ID: ", docRef.id);
            } else {
                const docRef = doc(collection(db, coll), docId); // Reference with custom ID
                await setDoc(docRef, data);
                console.log("Document written with ID: ", docRef.id);
            }
        }
    } catch (error) {
        console.error("Error: Admin authentication failed or write denied", error);
    }
}

async function writeStudy(studyData) {
    const fsCollection = "Studies"

    if (!studyData.title) {
        console.error("Error: 'title' is required in studyData.");
        return;
    }

    const date = new Date().toISOString().split('T')[0]; 
    const sanitizedTitle = studyData.title.replace(/[^a-zA-Z0-9-_]/g, '_'); // Replace invalid characters
    const docId = `${date}_${sanitizedTitle}`; 

    adminWriteData(studyData, fsCollection, docId)
}

// Anyone can read
async function getStudyData() {
    try {
        const studiesCollection = collection(db, "Studies");
        // Get all documents
        const querySnapshot = await getDocs(studiesCollection);
        // Map through and get data
        const studies = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("Retrieved studies: ", studies);
        return studies;
    } catch (error) {
        console.error("Error retrieving studies: ", error);
        throw error;
    }
}

export { writeStudy, getStudyData };