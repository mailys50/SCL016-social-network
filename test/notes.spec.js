 import MockFirebase from '../_mocks_/firebase-mock.js'

  import { addNote}  from '../src/lib/index.js';


describe('addNote', () => {
  it('deberia  agregar una nota ', (done) => {
    return addNote('me encanta ese lugar').then((data) => {
    expect(data).toBe('mensaje agregado')


    })
  })
})

