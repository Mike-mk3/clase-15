// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqFq9CYY2LkTe-qzYuxMlz_9xvrTRib2g",
    authDomain: "fb-restaurante-87417.firebaseapp.com",
    projectId: "fb-restaurante-87417",
    storageBucket: "fb-restaurante-87417.appspot.com",
    messagingSenderId: "141023297701",
    appId: "1:141023297701:web:8d0497e16c120c7f7b4d4c"
};


initializeApp(firebaseConfig);

export const db = getFirestore();