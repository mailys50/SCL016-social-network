// import firebase from "firebase";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  let firebaseConfig = {
    apiKey: "AIzaSyD5N2kwdt9NZs456F_blFJ3lk5Luu20A78",
    authDomain: "red-social-456cf.firebaseapp.com",
    projectId: "red-social-456cf",
    storageBucket: "red-social-456cf.appspot.com",
    messagingSenderId: "910680213666",
    appId: "1:910680213666:web:7fd4a61704386fad8baffb",
    measurementId: "G-WNZHSJG29K"
  };
    // Initialize Firebase
 
 firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const fs =firebase.firestore();
    const provider = new firebase.auth.GoogleAuthProvider();
  


