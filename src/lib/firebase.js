import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-ae854.firebaseapp.com",
  projectId: "chatapp-ae854",
  storageBucket: "chatapp-ae854.appspot.com",
  messagingSenderId: "922851666321",
  appId: "1:922851666321:web:c580b625e8bd922bbf9230",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
