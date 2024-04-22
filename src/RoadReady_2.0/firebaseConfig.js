import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

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

  const db = getFirestore(app);
  
  
  export { auth, db};

//Used the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
