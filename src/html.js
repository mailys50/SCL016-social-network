const firebaseConfig = {
  apiKey: 'AIzaSyD5N2kwdt9NZs456F_blFJ3lk5Luu20A78',
  authDomain: 'red-social-456cf.firebaseapp.com',
  projectId: 'red-social-456cf',
  storageBucket: 'red-social-456cf.appspot.com',
  messagingSenderId: '910680213666',
  appId: '1:910680213666:web:7fd4a61704386fad8baffb',
  measurementId: 'G-WNZHSJG29K',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const auth = () => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

   
 }
export const google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('user', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('error', error);
    // ...
  });

}

