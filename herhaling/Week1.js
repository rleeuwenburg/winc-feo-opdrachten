// Opdracht W1D2-1

// console.log('Hello Winc Academy');

// let name = 'Raimon';
// console.log('Hallo ' + name);

// let num1 = 34;
// let num2 = 48;
// let string1 = 'hoi, ';
// let string2 = 'hoe gaat het?';
// console.log(num1 + num2);
// console.log(string1 + string2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// let age = 39;
// let age2 = 'negenendertig';
// console.log(typeof age);
// console.log(typeof age2);

// Opdracht W1D2-3
/*
console.log('Hallo Winc Academy Studenten');
// Dit is een grote som
console.log(1230941 * 1823794);
console.log(637263 / 54);
*/

// Opdracht W1D2-4

// const age = 41;
// const isFemale = false;
// const driverStatus = 'dronken';

// if (age >= 18) {
//   console.log('U mag naar binnen');
// } else {
//   console.log('U wordt vriendelijk verzocht buiten te blijven');
// }

// if (isFemale) {
//   console.log('U bent een vrouw');
// } else {
//   console.log('U bent geen vrouw');
// }

// if (driverStatus === 'bob') {
//   console.log('U mag rijden');
// } else {
//   console.log('Geef maar hier die sleutels');
// }

// // Opdracht W1D2-5
// const age = 21;
// const isFemale = true;
// const driverStatus = 'dronken';
// const name = 'Sarah';
// const totalAmount = 4;

// if (age >= 18 && age <= 25) {
//   console.log('Je krijgt 50% korting');
// } else {
//   console.log('Je krijgt geen korting');
// }

// if (name === 'Bram' || name === 'Sarah') {
//   console.log('U krijgt een gratis biertje');
// } else {
//   console.log('Alleen Bram en Sarah drinken gratis');
// }

// if (totalAmount >= 100) {
//   console.log('U krijgt een gratis flesje Champagne');
// } else if (totalAmount > 50) {
//   console.log('U krijgt een gratis portie Nachos');
// } else if (totalAmount > 25) {
//   console.log('U krijgt een gratis portie (vega)bitterballen');
// } else {
//   console.log('Bestel voor meer dan 25 euro om een cadea te ontvangen');
// }

// // Opdracht W1D3-1

// let person = {
//   name: 'Raimon',
//   age: 39,
//   evaluations: [7, 10, 9]
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);

// console.log(person['name']);
// console.log(person['age']);

// console.log(person.evaluations);

// let colors = [];
// colors.push('groen', 'blauw', 'rood');
// console.log(colors);
// console.log(colors.length);
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// colors.push('geel', 5);
// colors.push({ greeting: 'hi ik ben een object' });
// console.log(colors);
// console.log(colors[colors.length - 1].greeting);

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

// console.log(
//   'Naam van het laatste kattenras: ' + catBreeds[catBreeds.length - 1].name
// );

// console.log('Energy levels van de eerste kat: ' + catBreeds[0].energy_level);
// console.log(
//   'eerste temperament van de temeperamenten van de tweede kat: ' +
//     catBreeds[1].temperament[0]
// );

// // tussenvariabele bij dubbele array.
// const temperamentLengthCatThree = catBreeds[2].temperament.length;

// console.log(
//   'laatste temperament van de temperamenten van de tweede kat: ' +
//     catBreeds[2].temperament[temperamentLengthCatThree - 1]
// );

// // maar het kan ook zo (wel minder goed leesbaar)
// console.log(
//   'laatste temperament van de temperamenten van de tweede kat: ' +
//     catBreeds[2].temperament[catBreeds[2].temperament.length - 1]
// );
// console.log(
//   'Favoriete voedsel van de derde kat: ' + catBreeds[2].favourite_food
// );

//Opdracht W1D3-3
// let tellFortune = function(numberOfChildren, partnerName, location, jobTitle) {
//   console.log(
//     'You will be a ' +
//       jobTitle +
//       ' in ' +
//       location +
//       ', and married to ' +
//       partnerName +
//       ' with ' +
//       numberOfChildren +
//       ' kids.'
//   );
// };
// tellFortune(3, 'Joepie', 'Appelscha', 'melkboer');

// let calculateDogAge = function(puppyAge, convRate) {
//   console.log(
//     'Your doggie is ' + puppyAge * convRate + ' years old in dog years'
//   );
// };

// calculateDogAge(3, 7);

// const maxAge = 80;
// let calculateSupply = function(age, amountPerDay) {
//   console.log(
//     'You will need ' +
//       Math.round((maxAge - age) * (amountPerDay * 365) +
//       ' to last you untill the ripe old age of ' +
//       maxAge
//   );
// };

// calculateSupply(78, 5.5);

// let calcCircumfrence = function(radius) {
//   let circumfrence = 2 * (Math.PI * radius);
//   console.log('The circumfrence is ' + circumfrence);
// };

// // afronden tot twee getallen achter de komma
// const calcCircumfrence = function(radius) {
//   let circumfrence = 2 * (Math.PI * radius);
//   let circumfrenceRounded = Math.round(circumfrence * 100) / 100;
//   console.log('The circumfrence is ' + circumfrence);
//   console.log('afgerond is dat: ' + circumfrenceRounded);
// };

// calcCircumfrence(4);

// // area = PI r2
// const calcArea = function(radius) {
//   let area = Math.PI * Math.pow(radius, 2);
//   let areaRounded = Math.round(area * 100) / 100;
//   console.log('The area is: ' + area);
//   console.log('afgerond is dat: ' + areaRounded);
// };

// calcArea(4);

// const celsiusToFahrenheit = function(celsius) {
//   let celsiusInF = (celsius * 9) / 5 + 32;
//   console.log(celsius + '°C is ' + celsiusInF + '°F');
// };

// const fahrenheitToCelsius = function(fahrenheit) {
//   let fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
//   console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
// };

// celsiusToFahrenheit(25);
// fahrenheitToCelsius(77);

// const myFavMovie = {
//   title: 'Puff the magic dragon',
//   duration: 30,
//   stars: ['Puff', 'Jackie', 'Living Sneezes']
// };

// const movieInformation = function(movie) {
//   let starsString = 'Stars: ';
//   for (i = 0; i < movie.stars.length; i++) {
//     starsString += movie.stars[i];
//     if (i != movie.stars.length - 1) {
//       starsString += ', ';
//     }
//   }
//   console.log(
//     movie.title + ' lasts for ' + movie.duration + ' minutes. ' + starsString
//   );
// };

// movieInformation(myFavMovie);

// // Opdracht W1D3-4

// const evenOddReporter = function() {
//   for (i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//       console.log(i + ' is even');
//     } else {
//       console.log(i + ' is uneven');
//     }
//   }
// };

// evenOddReporter();

// const tableOfNine = function() {
//   for (i = 1; i <= 10; i++) {
//     console.log(i + '*9 = ' + i * 9);
//   }
// };

// tableOfNine();

// const tableOfNum = function() {
//   for (num = 1; num <= 10; num++) {
//     for (i = 1; i <= 10; i++) {
//       console.log(i + ' * ' + num + ' = ' + i * num);
//     }
//   }
// };

// tableOfNum();

// const assignGrade = function(numberScore) {
//   for (numberScore = 60; numberScore <= 100; numberScore++) {
//     if (numberScore > 90) {
//       console.log('For ' + numberScore + 'your grade is A');
//     } else if (numberScore > 80) {
//       console.log('For ' + numberScore + 'your grade is B');
//     } else if (numberScore > 70) {
//       console.log('For ' + numberScore + 'your grade is C');
//     } else if (numberScore > 60) {
//       console.log('For ' + numberScore + 'your grade is D');
//     } else {
//       console.log('For ' + numberScore + 'your grade is F');
//     }
//   }
// };

// assignGrade();

// // Opdracht W1D3-5
let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i != colors.length) {
  console.log(colors[i]);
  i++;
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(element => console.log(element));
