// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAllZrTw43mPC9OgqRB541ZDDXTbaxIBp4",
    authDomain: "wedding-b30c2.firebaseapp.com",
    projectId: "wedding-b30c2",
    storageBucket: "wedding-b30c2.firebasestorage.app",
    messagingSenderId: "153711269995",
    appId: "1:153711269995:web:18fba261b9106f8238f92e"
};


// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Ekspor Firestore
const db = getFirestore(firebaseApp);
export default db;