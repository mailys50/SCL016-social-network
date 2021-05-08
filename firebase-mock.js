// const firestore = () => {
//   return {
//     collection: (nameCollection) => {
//       return {
//         add: (objData) => {
//           return new Promise((resolve, reject) => {
//             resolve("mensaje agregado");
//           });
//         },
//       };
//     },
//   };
// };

// const firebase = {
//   firestore: firestore,
// };
// export default jest.fn(() => {
//     return firebase;
// })
// const auth = () => {
//   return {
//     createUserWithEmailAndPassword: (email, password) => {
//       return {
//         then: (userCredential) => {
//           return {
//             catch: (error) => {
//               return new Promise((resolve, reject) => {
//                 resolve(Promise);
//               });
//             },
//           };
//         },
//       };
//     },
//   };
// };

// const auth1 = () => {
//      return {
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
//   };

 
// const auth2 = () => {
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
//     };
//     const firestore = () => {
//       return {
//         collection: (nameCollection) => {
//           return {
//             add: (objData) => {
//               return new Promise((resolve) => {
//                 resolve('mensaje agregado');
//               });
//             },
//           };
//         },
//       };
//     };

// const firebase = {
//   auth: auth,
//   auth: auth1,
//   auth: auth2,
//   firestore: firestore,

// };
// export default jest.fn(() => {
//     return firebase;
//     // filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
// })



//  window.firebase = new MockFirebase(auth);

//  const db = firebase;


// glogal.firebase =  MockFirebase();

// import { addNote}  from '../src/lib/index.js';

  
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




  



    


