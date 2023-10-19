// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJImB9a-bMZy3dLmeu_ESXKUhzeuZ0Hog",
  authDomain: "circuits-web.firebaseapp.com",
  projectId: "circuits-web",
  storageBucket: "circuits-web.appspot.com",
  messagingSenderId: "949016458033",
  appId: "1:949016458033:web:9d7bf2f800317beeb0f610",
  measurementId: "G-8KCHEW45LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app;