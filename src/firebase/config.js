// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// importar el getAuth de firebase/auth
import { getAuth } from "firebase/auth";

// importar el getFirestore de firebase/firestore
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABq9feVW0JYhdEx80h5J2GXg2cMHQ-V34",
  authDomain: "base-login-3f3e6.firebaseapp.com",
  projectId: "base-login-3f3e6",
  storageBucket: "base-login-3f3e6.appspot.com",
  messagingSenderId: "615433783531",
  appId: "1:615433783531:web:d876306be08587de6256ae"
};

// Initialize Firebase
export const Diarioapp = initializeApp(firebaseConfig);

export const DiarioAuth =  getAuth( Diarioapp );

export const DiarioDB =  getFirestore( Diarioapp );