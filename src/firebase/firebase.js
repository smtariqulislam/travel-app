// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-q_-r6PLNH_nFsn6jyA5zOSmNm0aRR_4",
    authDomain: "test-project-e40b9.firebaseapp.com",
    projectId: "test-project-e40b9",
    storageBucket: "test-project-e40b9.appspot.com",
    messagingSenderId: "1023907675806",
    appId: "1:1023907675806:web:2fa0d8201d40fb9a68058f",
    measurementId: "G-T6WKMDH15H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;