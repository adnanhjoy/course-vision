// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGltON7SL7AooWDNPpZpYYR4k99GCYIMY",
  authDomain: "course-vision.firebaseapp.com",
  projectId: "course-vision",
  storageBucket: "course-vision.appspot.com",
  messagingSenderId: "63334957059",
  appId: "1:63334957059:web:768524cec54d1dc8878e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;