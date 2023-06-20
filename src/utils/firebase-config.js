import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBonF-bBXV3tq2ohv7mgtG5ALyoKzcSMpg",
  authDomain: "clone-24ee3.firebaseapp.com",
  projectId: "clone-24ee3",
  storageBucket: "clone-24ee3.appspot.com",
  messagingSenderId: "732339897467",
  appId: "1:732339897467:web:58e4ef2f0008e276780ede",
  measurementId: "G-TF72E3KGYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app) 
