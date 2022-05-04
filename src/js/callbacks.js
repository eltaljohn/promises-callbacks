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

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];
  if (heroe) {
    callback(null, heroe);
  } else {
    callback(`No se encontró un heroe con el id ${id}`, heroe);
  }
};
