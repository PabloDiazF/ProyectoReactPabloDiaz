
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const {
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_MESSAGINGSENDER_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_APP_ID
  } = process.env


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDER_ID,
  appId: REACT_APP_APP_ID
};
export const init =  initializeApp