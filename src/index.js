import {
  obtenerHeroesArr,
  obtenerHeroAwait,
  heroesCiclo,
  heroeIfAwait,
} from "./js/await";

// console.time("await");
// obtenerHeroAwait("capi2")
//   .then((heroe) => {
//     console.log(heroe);
//     console.timeEnd("await");
//   })
//   .catch(console.warn);

// console.time("await");
// obtenerHeroesArr().then((heroes) => {
//   console.log(heroes);
//   console.timeEnd("await");
// });

heroesCiclo();
heroeIfAwait("iron");
