// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7d3nVaM3euuoVl6fIv98BlDW0YOM_vnM",
  authDomain: "linkedin-clone-85385.firebaseapp.com",
  projectId: "linkedin-clone-85385",
  storageBucket: "linkedin-clone-85385.appspot.com",
  messagingSenderId: "136614800384",
  appId: "1:136614800384:web:5493bd4c79d062d642bce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export { db }