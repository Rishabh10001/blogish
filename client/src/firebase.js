// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsphere-f9182.firebaseapp.com",
  projectId: "blogsphere-f9182",
  storageBucket: "blogsphere-f9182.firebasestorage.app",
  messagingSenderId: "104574051272",
  appId: "1:104574051272:web:34e76b45e930998c4856fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);