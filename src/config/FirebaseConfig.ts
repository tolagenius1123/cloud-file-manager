// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: process.env.API_KEY,
    apiKey: "AIzaSyCjC1oJBvLNDOUieH-hn_2YN_pA_1067qA",
    authDomain: "cloud-file-manager-424408.firebaseapp.com",
    projectId: "cloud-file-manager-424408",
    storageBucket: "cloud-file-manager-424408.appspot.com",
    messagingSenderId: "788464370",
    appId: "1:788464370:web:a47aef2ad6877a91ec866b",
    measurementId: "G-CXXPX7GMSB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export default {
//     app,
// };
