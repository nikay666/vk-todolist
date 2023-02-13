// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-dAxrFPcEGOziK7VsE4Mcfn7M1INgFc8',
  authDomain: 'vk-todolist-59042.firebaseapp.com',
  projectId: 'vk-todolist-59042',
  storageBucket: 'vk-todolist-59042.appspot.com',
  messagingSenderId: '970823841359',
  appId: '1:970823841359:web:a169723ec12dc0c06e9c3a',
  databaseURL: 'https://vk-todolist-59042-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

