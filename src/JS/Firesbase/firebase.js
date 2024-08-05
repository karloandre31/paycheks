// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-F8J4LJ60R9HdgKzrxbjPRLGmTkpfJVk",
  authDomain: "paycheks-931ff.firebaseapp.com",
  projectId: "paycheks-931ff",
  storageBucket: "paycheks-931ff.appspot.com",
  messagingSenderId: "613495119097",
  appId: "1:613495119097:web:0e92128e82be5e1ace5628",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
