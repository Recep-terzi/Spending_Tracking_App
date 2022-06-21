import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDX87835PbZuPR2EjWhc5hXW1FUYfoTi7w",
  authDomain: "harcamatakipapp.firebaseapp.com",
  projectId: "harcamatakipapp",
  storageBucket: "harcamatakipapp.appspot.com",
  messagingSenderId: "933298958046",
  appId: "1:933298958046:web:cad4d085db7975dc785c4f"
};

initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export {db,auth}