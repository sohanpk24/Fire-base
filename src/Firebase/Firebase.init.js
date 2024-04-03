// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmqiWM_iYmGNwBBGEBzX353wJuIgJ75ek",
  authDomain: "fir-auth-93956.firebaseapp.com",
  projectId: "fir-auth-93956",
  storageBucket: "fir-auth-93956.appspot.com",
  messagingSenderId: "792963985836",
  appId: "1:792963985836:web:28e7ae019e949d52f1ca09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)