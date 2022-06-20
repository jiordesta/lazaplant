import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAWdf8gCW8VL2ZSTEf68r5Pj7GvalSHrOo",
    authDomain: "lazaplant-3ce43.firebaseapp.com",
    projectId: "lazaplant-3ce43",
    storageBucket: "lazaplant-3ce43.appspot.com",
    messagingSenderId: "718205711884",
    appId: "1:718205711884:web:7c5321f7684e7232a8a029",
    measurementId: "G-XYQSVGV2MY"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)