// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUsk24IStUVy1W8ofzkVxOfRoTCW1mXSI",
  authDomain: "real-jammers-gla.firebaseapp.com",
  databaseURL: "https://real-jammers-gla-default-rtdb.firebaseio.com",
  projectId: "real-jammers-gla",
  storageBucket: "real-jammers-gla.appspot.com",
  messagingSenderId: "656085043289",
  appId: "1:656085043289:web:2b49b1edcb13b85ba60948"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const authDb = getFirestore();
