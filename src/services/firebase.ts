import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB9R6PjMOpw-oMyoYFJG2QV3ElytVyqxA",
  authDomain: "employee-data-jvf.firebaseapp.com",
  projectId: "employee-data-jvf",
  storageBucket: "employee-data-jvf.firebasestorage.app",
  messagingSenderId: "341096979559",
  appId: "1:341096979559:web:5e89ee53e534540df7c8c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);