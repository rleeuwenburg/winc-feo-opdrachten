// // JSON notatie van Array-objecten
// const superheroes = [
//   {
//     name: 'Batman',
//     publisher: 'DC Comics',
//     alter_ego: 'Bruce Wayne',
//     first_appearance: 'Detective Comics #27',
//     weight: '210'
//   },
//   {
//     name: 'Superman',
//     publisher: 'DC Comics',
//     alter_ego: 'Kal-El',
//     first_appearance: 'Action Comics #1',
//     weight: '220'
//   },
//   {
//     name: 'Flash',
//     publisher: 'DC Comics',
//     alter_ego: 'Jay Garrick',
//     first_appearance: 'Flash Comics #1',
//     weight: '195'
//   },
//   {
//     name: 'Green Lantern',
//     publisher: 'DC Comics',
//     alter_ego: 'Alan Scott',
//     first_appearance: 'All-American Comics #16',
//     weight: '186'
//   },
//   {
//     name: 'Green Arrow',
//     publisher: 'DC Comics',
//     alter_ego: 'Oliver Queen',
//     first_appearance: 'All-American Comics #16',
//     weight: '195'
//   },
//   {
//     name: 'Wonder Woman',
//     publisher: 'DC Comics',
//     alter_ego: 'Princess Diana',
//     first_appearance: 'The Incredible Hulk #180',
//     weight: '165'
//   },
//   {
//     name: 'Blue Beetle',
//     publisher: 'DC Comics',
//     alter_ego: 'Dan Garret',
//     first_appearance: 'Mystery Men Comics #1',
//     weight: '145'
//   },
//   {
//     name: 'Spider Man',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Peter Parker',
//     first_appearance: 'Amazing Fantasy #15',
//     weight: '167'
//   },
//   {
//     name: 'Captain America',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Steve Rogers',
//     first_appearance: 'Captain America Comics #1',
//     weight: '220'
//   },
//   {
//     name: 'Iron Man',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Tony Stark',
//     first_appearance: 'Tales of Suspense #39',
//     weight: '250'
//   },
//   {
//     name: 'Thor',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Thor Odinson',
//     first_appearance: 'Journey into Myster #83',
//     weight: '200'
//   },
//   {
//     name: 'Hulk',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Bruce Banner',
//     first_appearance: 'The Incredible Hulk #1',
//     weight: '1400'
//   },
//   {
//     name: 'Wolverine',
//     publisher: 'Marvel Comics',
//     alter_ego: 'James Howlett',
//     first_appearance: 'The Incredible Hulk #180',
//     weight: '200'
//   },
//   {
//     name: 'Daredevil',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Matthew Michael Murdock',
//     first_appearance: 'Daredevil #1',
//     weight: '200'
//   },
//   {
//     name: 'Silver Surfer',
//     publisher: 'Marvel Comics',
//     alter_ego: 'Norrin Radd',
//     first_appearance: 'The Fantastic Four #48',
//     weight: 'unknown'
//   }
// ];

// // 1. Maak een array van alle superhelden namen
// const superheroNames = superheroes.map(hero => {
//   return hero.name;
// });

// console.log('Dit is een array met alle superhelden namen:', superheroNames);

// //of zo
// const superheroNames2 = function(superheroes) {
//   return superheroes.map(hero => {
//     return hero.name;
//   });
// };

// console.log(
//   'Dit is een array met alle superhelden namen:',
//   superheroNames2(superheroes)
// );

// // open sessie hieronder
// // check loop ik over een array, is array meervoud en map item enkelvoud, heb ik een returnfunctie?
// const heroesWithWeights = superheroes.map(hero => {
//   if (hero.weight === 'unknown') {
//     console.log(hero);
//   } else {
//     const newHeroWeight = parseInt(hero.weight);
//     hero.weight = newHeroWeight;
//     return hero;
//   }
// });

// console.log(heroesWithWeights);

// const filteredHeroes = superheroes.filter(hero => {
//   // if (hero.publisher === ) etc
//   return hero.publisher === 'Marvel Comics';
// });

// console.log(filteredHeroes);
// kan ook als verkorte versie (zie github)

// reduce voorbeeld
const myArray = [1, 2, 3, 4, 5];
const addValues = myArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// 0 is initial value, die is standaard 0
console.log(addValues);

// superhero bonus
// stap 1, gewicht is string en je wil een nr. Gebruik mapfunctie.
// in map if statement om weight = unknown, dan moet die naar 0 bij else
// binnen een reduce een loop maken, met daarin if (currentHeaviestHero.weight > currentHero.weight) {
//  return currentHeaviestHero } else { return currentHero}
