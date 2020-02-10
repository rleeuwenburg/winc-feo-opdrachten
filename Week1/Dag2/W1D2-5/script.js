// const age = 26;
// const isFemale = true;
// const driverStatus = 'bob';
// const name = 'Marjolein';

/*
const age = 12;
const isFemale = false;
const driverStatus = 'dronken'; */

const age = 24;
const isFemale = false;
const driverStatus = 'drinker';
const name = 'Bram';
const totalAmount = 108;

if (age >= 18) {
  console.log('U bent 18 of ouder en mag naar binnen');
} else {
  console.log(
    'U bent nog geen 18, u wordt vriendelijk verzocht buiten te blijven'
  );
}

if (isFemale) {
  console.log('Vrouw');
} else {
  console.log('Geen vrouw');
}

if (driverStatus === 'bob') {
  console.log('U mag rijden');
} else {
  console.log('Zal ik een taxi voor u bellen?');
}

if (age >= 18 && age <= 25) {
  console.log('U krijgt 50% korting');
} else {
  console.log('U krijgt geen korting');
}

if (name === 'Sarah' || name === 'Bram') {
  console.log('Gefeleciteerd, u krijgt een gratis biertje!');
} else {
  console.log('U krijgt geen gratis biertje');
}

if (totalAmount >= 100) {
  console.log('U krijgt een gratis flesje champagne');
} else if (totalAmount > 50) {
  console.log('U krijgt een gratis portie Nachos');
} else if (totalAmount > 25) {
  console.log('U krijgt een gratis portie (vega)bitterballen');
} else {
  console.log('U krijgt helemaal niets');
}
