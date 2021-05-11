import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc123: {
          title: 'terminar la pildora',
        },
        abc125: {
          title: 'comprar trufas',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});

import { addComment, deleteNote } from '../src/lib/index.js';

describe('addComment', () => {
  it('Debería agregar una nota', () => {
    return addComment('hermoso paisaje').then((comment) => {
        expect(comment._data.title).toBe('hermoso paisaje')
      })
  });
})

describe('delteNote', () => {
  it('Debería poder eliminar una nota con id: 5828258218', () => {
    return deleteNote('5828258218').then((comment) => {
        expect(comment).toBe(undefined)
      })
  });
})



