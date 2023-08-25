import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0wSF5bvGVRh9wl81l33C_rTS6XWgKPhU",
  authDomain: "jet-inc.firebaseapp.com",
  databaseURL: "https://jet-inc-default-rtdb.firebaseio.com",
  projectId: "jet-inc",
  storageBucket: "jet-inc.appspot.com",
  messagingSenderId: "532604089568",
  appId: "1:532604089568:web:e9b7564aaaa8c8682ccc85",
  measurementId: "G-H2YXZ1YRQ0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
