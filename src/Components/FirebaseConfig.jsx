// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOPfIe53D4RS2Yq5F9L6dZha5ITCK7j4E",
  authDomain: "demoproject-14706.firebaseapp.com",
  projectId: "demoproject-14706",
  storageBucket: "demoproject-14706.firebasestorage.app",
  messagingSenderId: "111604732254",
  appId: "1:111604732254:web:1c24e388e203782e147fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;