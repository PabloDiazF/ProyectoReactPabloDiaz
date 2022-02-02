import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CartProvider from './context/cartContext';
//FIREBASE 
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz2JRsJ_DYDlfcZ8xnSPuiBSzyM36Xnao",
  authDomain: "pablodiaz-reactjs-coderhouse.firebaseapp.com",
  projectId: "pablodiaz-reactjs-coderhouse",
  storageBucket: "pablodiaz-reactjs-coderhouse.appspot.com",
  messagingSenderId: "831936574073",
  appId: "1:831936574073:web:c5eb5248a07c71a2371aa8"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
    <BrowserRouter>
        <CartProvider>
            <App />
        </CartProvider>
    </BrowserRouter>,
    document.getElementById('root')
);


