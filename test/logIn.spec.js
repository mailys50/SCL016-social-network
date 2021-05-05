import MockFirebase from '../_mocks_/firebase-mock.js'
glogal.firebase = MockFirebase();
import {  auth } from '../src/lib/index.js';


describe('auth', () => {


  it('deberia dar un error de tipo', () => {
     expect(() => auth.firebase()).toThrow(TypeError);  
    });

    it('deberia iniciar sesion con email: bdmb@hotmail.com y password: 123456', () => {
      let result = auth2('bdmb@hotmail.com','123456')
      expect(typeof result).toBe('Promise')

     });
     
});
