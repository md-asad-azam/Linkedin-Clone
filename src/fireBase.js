import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7d3nVaM3euuoVl6fIv98BlDW0YOM_vnM",
    authDomain: "linkedin-clone-85385.firebaseapp.com",
    projectId: "linkedin-clone-85385",
    storageBucket: "linkedin-clone-85385.appspot.com",
    messagingSenderId: "136614800384",
    appId: "1:136614800384:web:5493bd4c79d062d642bce5"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };