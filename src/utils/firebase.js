// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAYOKv86i5m7R7rWT0CwPUr_K2TpzeDCA",
  authDomain: "netfilxgpt-56b4b.firebaseapp.com",
  projectId: "netfilxgpt-56b4b",
  storageBucket: "netfilxgpt-56b4b.firebasestorage.app",
  messagingSenderId: "390906552494",
  appId: "1:390906552494:web:ab104a879f3ee11155cd3f",
  measurementId: "G-3MM88MG5RC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
