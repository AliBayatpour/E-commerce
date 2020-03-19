import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
  apiKey: "AIzaSyD-wIe_EZs9xB89L8xFq6YuyMcbTkzpMIc",
  authDomain: "e-commerce-48120.firebaseapp.com",
  databaseURL: "https://e-commerce-48120.firebaseio.com",
  projectId: "e-commerce-48120",
  storageBucket: "e-commerce-48120.appspot.com",
  messagingSenderId: "1043813417422",
  appId: "1:1043813417422:web:f657f599280e3c388d2b9f",
  measurementId: "G-QL9T07VEVH"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
