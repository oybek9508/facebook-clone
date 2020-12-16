// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDu8pClt7WE1P8xLd828MxlW8TH3BhYto4",
  authDomain: "facebook-clone-56783.firebaseapp.com",
  databaseURL: "https://facebook-clone-56783.firebaseio.com",
  projectId: "facebook-clone-56783",
  storageBucket: "facebook-clone-56783.appspot.com",
  messagingSenderId: "596067205696",
  appId: "1:596067205696:web:0d8c2440d84331fc7495a5",
  measurementId: "G-LZQFFLT2F2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
