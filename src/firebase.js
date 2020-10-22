import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgrWLupz_La0E-uIoogz5_Ar01JjvynwI",
  authDomain: "app-237a1.firebaseapp.com",
  databaseURL: "https://app-237a1.firebaseio.com",
  projectId: "app-237a1",
  storageBucket: "app-237a1.appspot.com",
  messagingSenderId: "1048069113321",
  appId: "1:1048069113321:web:b685b6f9bb12c4c67b7778",
  measurementId: "G-NPGC5YMPLT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
