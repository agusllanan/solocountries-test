// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "solo-countries.firebaseapp.com",
  projectId: "solo-countries",
  storageBucket: "solo-countries.appspot.com",
  messagingSenderId: "719394741713",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-JXD5F40X2Z"
};

export const app = initializeApp(firebaseConfig);