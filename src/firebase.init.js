// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5iK4B4yzlZ-WntEoGLvS_IQZn5Rx2q5o",
  authDomain: "bicycle-parts-manufacture.firebaseapp.com",
  projectId: "bicycle-parts-manufacture",
  storageBucket: "bicycle-parts-manufacture.appspot.com",
  messagingSenderId: "299832078472",
  appId: "1:299832078472:web:50530a961db746fa4def3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;