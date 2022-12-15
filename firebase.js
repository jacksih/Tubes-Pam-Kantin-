// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDztaW92_GWQNK6ze6fw2kD9MsErzmb_78",
    authDomain: "database-794fc.firebaseapp.com",
    projectId: "database-794fc",
    storageBucket: "database-794fc.appspot.com",
    messagingSenderId: "421989137617",
    appId: "1:421989137617:web:06c40ee094b447f9c319f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
