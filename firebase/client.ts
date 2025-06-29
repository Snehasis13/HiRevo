import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdhYI1zmDJycVHRmy-kzrNiCHDmazDNhM",
  authDomain: "interviewer-5ac73.firebaseapp.com",
  projectId: "interviewer-5ac73",
  storageBucket: "interviewer-5ac73.firebasestorage.app",
  messagingSenderId: "1099397173255",
  appId: "1:1099397173255:web:10f377bf754425feea1aa2",
  measurementId: "G-M1XQTC3N1Y"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);