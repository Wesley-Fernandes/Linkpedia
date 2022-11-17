import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"





const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKED,
  messagingSenderId: import.meta.env.VITE_APP_MSGSENDID,
  appId: import.meta.env.VITE_APP_APPID
};

const Application = initializeApp(firebaseConfig);
const Database = getFirestore(Application);
const Authentify = getAuth(Application)

export {Database, Authentify}