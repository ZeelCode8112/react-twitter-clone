import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaTMtxVc6CnYFNJ2q5US2kiJhLjj0X5_E",
    authDomain: "react-twitter-clone-8b2e8.firebaseapp.com",
    projectId: "react-twitter-clone-8b2e8",
    storageBucket: "react-twitter-clone-8b2e8.appspot.com",
    messagingSenderId: "559725918744",
    appId: "1:559725918744:web:7c6ca3db7c04647fcda16d",
    measurementId: "G-3264GET72S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;