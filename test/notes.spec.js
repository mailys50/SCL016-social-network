import MockFirebase from "mock-cloud-firestore";

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc123: {
          title: "terminar la pildora",
        },
        abc125: {
          title: "comprar trufas",
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});

import { addNote, getNotes } from "../src/lib/index.js";

describe("addNote", () => {
  it("Debería agregar una nota", (done) => {
    return addNote("comprar pan").then((data) => {
      const callback = (notes) => {
        const result = notes.find((elemento) => {
          return elemento.title === "comprar pan";
        });
        expect(result.title).toBe("comprar pan");
        done();
      };
      getNotes(callback);
    });
  });
});

describe("delteNote", () => {
  it("Debería poder eliminar una nota con id: abc123", (done) => {
    return deleteNote("abc123").then(() => {
      const callback = (comments) => {
        const result = comments.find((elemento) => {
          return elemento.id === "abc123";
        });
        expect(result).toBe(undefined);
        done();
      };
      getNotes(callback);
    });
  });
});


