// why's and hows in comment
// console.log('Hello World');

// const myName = 'Raimon';
// const myLastName = 'Leeuwenburg';
// console.log(myName + ' ' + myLastName);

// let myAge = 39;
// console.log(typeof myAge);
// console.log(typeof myName);

// let age = 32;
// if (age >= 18) {
//   console.log('U mag erin');
// } else {
//   console.log('Blijf lekker buiten');
// }

// let age = 24;
// let isFemale = false;
// let driverStatus = 'dronken';
// let name = 'Bram';
// const totalAmount = 75;

// if (age >= 18) {
//   console.log('U mag erin');
// } else {
//   console.log('Blijf lekker buiten');
// }
// if (age >= 18 && age <= 25) {
//   console.log('U krijgt 50% korting');
// } else {
//   console.log('U krijgt geen korting');
// }

// if (isFemale) {
//   console.log('U bent vrouw');
// } else {
//   console.log('U bent geen vrouw');
// }

// if (driverStatus == 'bob') {
//   console.log('U kunt rijden');
// } else {
//   console.log('U mag niet meer rijden');
// }

// if (name === 'Sarah' || name === 'Bram') {
//   console.log('U krijgt een gratis drankje');
// } else {
//   console.log('Gratis drankje? vergeet het maar');
// }

// if (totalAmount >= 100) {
//   console.log('U krijgt een gratis fles champagne');
// } else if (totalAmount > 50) {
//   console.log('U krijgt een gratis portie Nachos');
// } else if (totalAmount > 25) {
//   console.log('U krijgt een gratis portie (vega)bitterballen');
// } else {
//   console.log('U krijgt helemaal niets gierigaard');
// }

// let person = {
//   name: 'Raimon',
//   age: 39,
//   evaluations: [7, 10, 9]
// };

// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person['age']);
// console.log(person.evaluations);
// console.log(typeof person.evaluations);

// let color = ['Rood', 'Geel', 'Groen'];
// console.log(color);
// console.log(color.length);
// console.log(color[0]);
// console.log(color[color.length - 1]);
// color.push('Blauw');
// color.push(5);
// color.push({ greeting: 'Hoi, ik ben een object' });
// console.log(color);
// console.log(color.length);
// console.log(color[color.length - 1]);
// console.log(color[color.length - 1].greeting);

// const catBreeds = [
//   {
//     name: 'Abyssinian',
//     description:
//       'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
//     dog_friendly: 4,
//     energy_level: 5,
//     life_span: '14 - 15',
//     origin: 'Egypt',
//     temperament: [
//       'Active',
//       'Energetic',
//       'Independent',
//       'Intelligent',
//       'Gentle'
//     ],
//     wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
//     food: {
//       favourite_food: 'fish',
//       medium_liked_food: 'dried fruits',
//       disliked_food: 'walnuts'
//     }
//   },
//   {
//     name: 'Aegean',
//     description:
//       'Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.',
//     dog_friendly: 4,
//     energy_level: 53,
//     life_span: '9- 12',
//     origin: 'Greece',
//     temperament: ['Affectionate', 'Social', 'Intelligent', 'Playful', 'Active'],
//     wikipedia_url: 'https://en.wikipedia.org/wiki/Aegean_cat',
//     food: {
//       favourite_food: 'tuna',
//       medium_liked_food: 'canned food',
//       disliked_food: 'all fruits'
//     }
//   },
//   {
//     name: 'American Bobtail',
//     description:
//       'American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.',
//     dog_friendly: 5,
//     energy_level: 3,
//     life_span: '11 - 15',
//     origin: 'United States',
//     temperament: [
//       'Intelligent',
//       'Interactive',
//       'Lively',
//       'Playful',
//       'Sensitive'
//     ],
//     wikipedia_url: 'https://en.wikipedia.org/wiki/American_Bobtail',
//     food: {
//       favourite_food: 'meaty things',
//       medium_liked_food: 'tuna',
//       disliked_food: 'canned food'
//     }
//   }
// ];

// console.log(catBreeds[catBreeds.length - 1].name);
// console.log(catBreeds[0].energy_level);
// console.log(catBreeds[1].temperament[0]);
// const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
// console.log(catBreeds[2].temperament[lengthTemperamentsCatThree - 1]);
// console.log(catBreeds[2].food.favourite_food);

// Make a cheese sandwich.
// Grab a sandwich.
// Spread some butter.
// Put some cheese on it.

// let makeCheeseSandwich = function() {
//   console.log('Grab a sandwich');
//   console.log('Spread some butter');
//   console.log('Put some cheese on it');
// };

// makeCheeseSandwich();

// let makeSandwich = function(topping) {
//   console.log('Grab a sandwich');
//   console.log('Spread some butter');
//   console.log('Put some ' + topping + ' on it');
//   console.log('There you go, a sandwich with ' + topping);
// };

// makeSandwich('ham');
// makeSandwich('hagelslag');

// const calculateDiscountedPrice = function(totalAmount, Discount) {
//   return Math.round(totalAmount - Discount);
// };

// console.log(calculateDiscountedPrice(100, 25));

// const calculateDiscountedPrice25 = function(totalAmount, Discount) {
//   if (totalAmount > 25) {
//     return Math.round(totalAmount - Discount);
//   } else {
//     return totalAmount;
//   }
// };

// console.log(calculateDiscountedPrice25(100, 25));
// console.log(calculateDiscountedPrice25(24, 25));

// const tellFortune = function(partner, kids, job, location) {
//   let future =
//     'You will be a ' +
//     job +
//     ' in ' +
//     location +
//     ' , and will marry ' +
//     partner +
//     ' with ' +
//     kids +
//     ' children';
//   console.log(future);
// };

// tellFortune('Sis', 2, 'developer', 'Rotterdam');

// const calculateDogYears = function(dogAge, convRate) {
//   let dogYears = dogAge * convRate;
//   console.log('Your doggie is ' + dogYears + ' years old in dog years!');
// };

// calculateDogYears(4, 7);

// const calculateLifeSupply = function(age, amountPerDay) {
//   const maxAge = 80;
//   let lifeSupply = Math.round(maxAge - age) * (amountPerDay * 365);
//   console.log(lifeSupply);
// };

// calculateLifeSupply(34, 6);

const favoriteMovie = {
  title: 'Puff, the magic Dragon',
  duration: 180,
  stars: ['Puff', 'Sneazes', 'Robert deNiro']
};

let printMovie = function(movie) {
  console.log(movie.tile + ' lasts for ' + movie.duration + ' minutes.');
  let starsString = 'It Stars: ';
  for (let i = 0; i < movie.stars.length; i++) {
    starsString += movie.stars[i];
    if (i != movie.stars.length - 1) {
      starsString += ', ';
    }
  }
  console.log(starsString);
};

console.log(printMovie);
