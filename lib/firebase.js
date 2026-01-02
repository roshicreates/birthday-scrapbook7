import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9HqmageMFfBC9VQzogRetxL4e7p69ZPU",
  authDomain: "birthday-scrapbook.firebaseapp.com",
  projectId: "birthday-scrapbook",
  storageBucket: "birthday-scrapbook.firebasestorage.app",
  messagingSenderId: "647419303538",
  appId: "1:647419303538:web:6de2ae56c3e9d4281594eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
