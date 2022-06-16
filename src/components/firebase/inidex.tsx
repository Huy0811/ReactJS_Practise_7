import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqKdkJlEunpH4o3IeADx-c75v9--bWb1w",
  authDomain: "shop-ci-10417.firebaseapp.com",
  databaseURL: "https://shop-ci-10417-default-rtdb.firebaseio.com",
  projectId: "shop-ci-10417",
  storageBucket: "shop-ci-10417.appspot.com",
  messagingSenderId: "350319143680",
  appId: "1:350319143680:web:474fe7b42cde4904f021e5",
  measurementId: "G-Q12H69G089",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
