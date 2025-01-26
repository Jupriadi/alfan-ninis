// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmWEGhAugdMfW-yH1mI-gwwFYh5zzVL0g",
    authDomain: "weding-alfan.firebaseapp.com",
    projectId: "weding-alfan",
    storageBucket: "weding-alfan.firebasestorage.app",
    messagingSenderId: "568508756403",
    appId: "1:568508756403:web:4ee2d1d30151aa40795bc6"
};


// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Ekspor Firestore
const db = getFirestore(firebaseApp);
export default db;