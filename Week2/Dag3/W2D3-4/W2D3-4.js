const array = [
  { name: 'N. Armstrong', profession: 'spacecowboy', age: 89 },
  { name: 'H. de Haan', profession: 'kippen hypnotiseur', age: 59 },
  { name: 'A. Curry', profession: 'kikvorsman', age: 32 },
  { name: 'F. Vonk', profession: 'slangenmelker', age: 36 },
  { name: 'B. Bunny', profession: 'konijnen uitlaatservice', age: 27 },
  { name: 'Dr.Evil', profession: 'digital overlord', age: 56 }
];

for (let person of array) {
  //hier moeten console.logs komen
  // console.log('Dit is de gehele persoon:', person);
  // console.log('Dit is de eerste gehele persoon:', array[0]);
  // console.log('Dit zijn alle gehele personen:', array);
  // console.log('Dit is de naam van de persoon:', person.name);
  // console.log('Dit is het geboortejaar van de persoon:', 2020 - person.age);
  //   console.log(
  //     'Dit is de naam en het beroep:',
  //     person.name + ' is een ' + person.profession
  //   );
  if (person.age > 50) {
    console.log('Deze persoon is 50+:', person);
  }
}
