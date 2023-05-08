import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "chat-1e56b.firebaseapp.com",
    projectId: "chat-1e56b",
    storageBucket: "chat-1e56b.appspot.com",
    messagingSenderId: "914193952112",
    appId: "1:914193952112:web:f67bed4d9031bcf695b3b5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();