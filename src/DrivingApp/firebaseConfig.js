import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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
    projectId: "road-ready-76843",
    storageBucket: "road-ready-76843.appspot.com",
    messagingSenderId: "286872829915",
    appId: "1:286872829915:web:24de74d432f450be7b31fe",
    measurementId: "G-LBY80M2833"
  };


  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth();
  
  
  export { auth };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
