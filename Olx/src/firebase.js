import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCT361UdgAry_Y1zBmUFFYAcXZo8h67Dho",
    authDomain: "olx-classified-app.firebaseapp.com",
    projectId: "olx-classified-app",
    storageBucket: "olx-classified-app.firebasestorage.app",
    messagingSenderId: "520602479970",
    appId: "1:520602479970:web:8c0cbada9fa8c5a502d03b",
    measurementId: "G-6VXKLBTLWH"
  };  

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app)
