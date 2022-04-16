import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHc6P-yEb-3Pbq3IFVijrf-HmXTL9dBgk",
  authDomain: "cinesar-15937.firebaseapp.com",
  projectId: "cinesar-15937",
  storageBucket: "cinesar-15937.appspot.com",
  messagingSenderId: "508122116448",
  appId: "1:508122116448:web:9852fc276826bd1f2e2e05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);