import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCMtzKZPpot8UHcPrP-y9237yUnStoZH5E",
    authDomain: "login-icutter-store.firebaseapp.com",
    projectId: "login-icutter-store",
    storageBucket: "login-icutter-store.appspot.com",
    messagingSenderId: "712240651895",
    appId: "1:712240651895:web:b6ee57b1e2538da2017072"
  };

initializeApp (firebaseConfig);

  export const db = getFirestore();