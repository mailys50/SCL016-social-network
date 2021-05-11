const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore
);



import { signIn } from '../src/lib/index.js';

describe('probando signIn', () => {
  it('Debería poder iniciar sesion', () => {
    return signIn('juan@gmail.com', '123456').then((user) => {
        expect(user.email).toBe('juan@gmail.com')
      })
  });
})