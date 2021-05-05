import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        user_a: {
          age: 15,
          username: 'user_a',
        }
      }
    }
  }
};

window.firebase = new MockFirebase(fixtureData);

const db = firebase.firestore();

db.collection('users').add({ ... });



// import MockFirebase2 from 'mock-cloud-firestore';

// function addUser(firebase) {
//   return firebase.firestore.collection('users').add({ bjData });
// }

// const fixtureData = {
//   __collection__: {
//     users: {
//       __doc__: {
//         user_a: {
//           age: 15,
//           username: 'user_a',
//         }
//       }
//     }
//   }
// };
// const firebase = new MockFirebase(fixtureData);

// addUser(firebase);



// const auth = () => {
//       return {
//         createUserWithEmailAndPassword: (email, password) => {
//           return {
//             then: (userCredential) => {
//               return {
//                 catch: (error) => {
//                   return new Promise((resolve, reject) => {
//                     resolve(Promise);
//                   });
//                 },
//               };
//             },
//           };
//         },
//       };
//   };

  

// const auth = () => {
//   return {
//     auth: () => {
//       return {
//         signInWithEmailAndPassword: (email2, password2) => {
//           return {
//             then: (userCredential) => {
//               return {
//                 catch: (error) => {
//                   return new Promise((resolve) => {
//                     resolve(Promise);
//                   });
//                 },
//               };
//             },
//           };
//         },
//       };
//     },
//   };
// };
 
// const google = () => {
//   return {
//     auth: () => {
//       return {
//         signInWithPopup: (provider) => {
//           return {
//             then: (result) => {
//               return {
//                 catch: (error) => {
//                   return new Promise((resolve, reject) => {
//                     resolve('ingresar con google');
//                     reject('error')
//                   });
//                 },
//               };
//             },
//           };
//         },
//       };
//     },
//   };
// };

// const firestore = () => {
//   return {
//     collection: (nameCollection) => {
//       return {
//         add: (objData) => {
//           return new Promise((resolve) => {
//             resolve('mensaje agregado');
//           });
//         },
//       };
//     },
//   };
// };


    


// const firebase = {
//   auth: auth,
//   firestore: firestore,

// };
// export default jest.fn(() => {
//     return firebase;
// })