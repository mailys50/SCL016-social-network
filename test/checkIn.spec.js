const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(

  () => null,
  () => mockauth,
  () => mockfirestore
);



import { register } from '../src/lib/index.js';

describe('probando register', () => {
  it('Debería  registrar usuarios ', () => {
    return register('bdmd@gmail.com', '123456').then((user) => {
        expect(user.email).toBe('bdmd@gmail.com')
      })
  });
})