import MockFirebase from '../_mocks_/firebase-mock.js'
glogal.firebase = MockFirebase();
import {  auth } from '../src/lib/index.js';


describe('auth', () => {


  it('deberia dar un false', () => {
     expect(firebase.register("Mailys@gmail.com","123456")).toBe(true);  
    });

    
    it('deberia iniciar sesion con email: bdmb@hotmail.com y password: 123456', () => {
        let result = firebase.auth()
        .createUserWithEmailAndPassword('bdmb@hotmail.com','123456')
        expect(typeof result).toBe('Promise')
  
       });


    it('deberia iniciar sesion con email: bdmb@hotmail.com y password: 123456', () => {
      let result = auth2('bdmb@hotmail.com','123456')
      expect(typeof result).toBe('Promise')

     });
     
});
