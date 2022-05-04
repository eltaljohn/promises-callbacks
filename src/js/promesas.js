const heroes = {
  capi: {
    nombre: "Capitan Ameria",
    poder: "Resistencia",
  },
  iron: {
    nombre: "Ironman",
    poder: "Tecnológico",
  },
  spider: {
    nombre: "Spiderman",
    poder: "Telaraña",
  },
};

export const buscarHeroe = (id) => {
  const heroe = heroes[id];
  return new Promise((resolve, reject) => {
    if (heroe) {
      setTimeout(() => resolve(heroe), 1000);
    } else {
      reject(`No se encontró un heroe con el id ${id}`);
    }
  });
};

export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    // throw `No se encontró un heroe con el id ${id}`;
    throw Error(`No se encontró un heroe con el id ${id}`);
  }
};

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Lenta"), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Midia"), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Rápida"), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
