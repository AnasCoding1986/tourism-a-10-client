// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoqiszPwVKuuiXzmhJl1cfhgWDztdpNjE",
  authDomain: "tourism-6b17e.firebaseapp.com",
  projectId: "tourism-6b17e",
  storageBucket: "tourism-6b17e.appspot.com",
  messagingSenderId: "971826222017",
  appId: "1:971826222017:web:da67dae69e5ad668441540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

