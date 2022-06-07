import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDehiQc6129oXG7G4-s9pqLNEfWkbzVv7o",
  authDomain: "english-sharing-9ecab.firebaseapp.com",
  projectId: "english-sharing-9ecab",
  storageBucket: "english-sharing-9ecab.appspot.com",
  messagingSenderId: "26597162185",
  appId: "1:26597162185:web:093915544beb6680c3a118",
  measurementId: "G-HYRG2VEC2N"
};


firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore();
// const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore};