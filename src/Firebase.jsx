import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlfAowcqNMvjQ9p2oTg1cY3XdeeI6krnk",
    authDomain: "fir-education-17f8f.firebaseapp.com",
    projectId: "fir-education-17f8f",
    storageBucket: "fir-education-17f8f.appspot.com",
    messagingSenderId: "732653841154",
    appId: "1:732653841154:web:c6ea3650559ab6831af01b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);