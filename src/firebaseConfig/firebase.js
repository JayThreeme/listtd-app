// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmw9KtRcyLmf_vgMlhi_KEEo9z79wCXzA",
  authDomain: "linktd-db.firebaseapp.com",
  projectId: "linktd-db",
  storageBucket: "linktd-db.firebasestorage.app",
  messagingSenderId: "567343516490",
  appId: "1:567343516490:web:9aaacd9ce2d37abceecfb3",
  measurementId: "G-T4R9HQY8SV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
