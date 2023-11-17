import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {getDatabase, onValue, ref, set } from 'firebase/database';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBH244e1Oe9H-SemkZ2CboRlHvgYGVAcdw",
    authDomain: "road-ready-76843.firebaseapp.com",
    databaseURL: "https://road-ready-76843-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "road-ready-76843",
    storageBucket: "road-ready-76843.appspot.com",
    messagingSenderId: "286872829915",
    appId: "1:286872829915:web:24de74d432f450be7b31fe",
    measurementId: "G-LBY80M2833"
  };


  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth();
  
  function writeUserData(userID, phone) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userID);

    set(reference, {
      phoneNumber : phone,
    });

  const readRef = ref(db, 'users/' + userID);
  onValue(readRef, (snapshot) => {
    const data = snapshot.val();
    updateCurrentUser(postElement, data);
  })
  }
  
  export { auth, writeUserData, onValue };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
