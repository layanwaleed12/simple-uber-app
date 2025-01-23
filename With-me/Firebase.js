import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWjxYELnMlG8XH1a2KwdLx04YXT9Bh0LM",
  authDomain: "withme-a3020.firebaseapp.com",
  databaseURL: "https://withme-a3020-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withme-a3020",
  storageBucket: "withme-a3020.appspot.com",
  messagingSenderId: "674708257212",
  appId: "1:674708257212:web:5f5142b4830a0b56c153b9",
  measurementId: "G-HBRDWDCX1Q"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };

