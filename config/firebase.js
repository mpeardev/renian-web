// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsp0G6BJJauCriw4ubf-HBYS-OyUYj8ZA",
  authDomain: "renian-web.firebaseapp.com",
  projectId: "renian-web",
  storageBucket: "renian-web.appspot.com",
  messagingSenderId: "1092640149108",
  appId: "1:1092640149108:web:b7efd231b72917fbcf0b21",
  measurementId: "G-YSEJX4S88V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
