import React from "react";
import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaM7znqxAzQupjAjFpS7m8Ttsz72lW1JM",
  authDomain: "wasiqkhalid.firebaseapp.com",
  databaseURL: "https://wasiqkhalid.firebaseio.com",
  projectId: "wasiqkhalid",
  storageBucket: "wasiqkhalid.appspot.com",
  messagingSenderId: "688156594375",
  appId: "1:688156594375:web:04682e7222f184d7bdaee2",
  measurementId: "G-48H1WFXJ7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth}