import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIzgv14G8Af1Ccy4_yIljBujCfJEXFEgc",
  authDomain: "input-bfeb7.firebaseapp.com",
  databaseURL: "https://input-bfeb7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "input-bfeb7",
  storageBucket: "input-bfeb7.firebasestorage.app",
  messagingSenderId: "422287140007",
  appId: "1:422287140007:web:f2e755acb5dfa46abce782",
  measurementId: "G-PTB9ZHXC6F"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { firebaseConfig, database};

