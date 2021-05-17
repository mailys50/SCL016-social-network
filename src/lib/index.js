export const register = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
    
};
export const signIn = (email2, password2) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email2, password2);
};
// base de datos
export const firestore = () => {
  return firebase.firestore();
};

// // iniciar con google
export const google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('error', error);
      // ...
    });
    
};

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('Saliendo');
    })
    .catch((error) => {
      console.log('error');
      
    });
};
// agregar nota en este caso recibe un string 'textNewNote'
export const addComment = (textNewComment) => {
  return firebase.firestore().collection('comments').add({
    title: textNewComment,
    date:new Date(),
  })
}
// eliminar notas recibe como parametro el id de la nota que se desea eliminar
export const deleteNote = (idNote) => {
  return firebase.firestore().collection('comments').doc(idNote).delete()
}
// para traer todas las notas cada vez que se actualice en tiempo real gracias a onSnapshot actualiza
export const getNotes  = () => {
  return firebase.firestore().collection('comments').get();
}

// mensaje
export const observer = () => { 
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {    
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      message();
      // User is signed out
      // ...
    }
  }); 
};
// export const storage = () => { 
//   const storage = firebase.storage();
// };