// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKX48DCm_-BY3ZCpHZAIiSg0QGdsE0ics",
  authDomain: "react-todo-javascript.firebaseapp.com",
  projectId: "react-todo-javascript",
  storageBucket: "react-todo-javascript.appspot.com",
  messagingSenderId: "713703185746",
  appId: "1:713703185746:web:8a14fce80bf5ffc6a7ae8b",
  measurementId: "G-MGH9L2RZ5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};