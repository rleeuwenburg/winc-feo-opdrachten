// const arrayWithWords = ['nice', 'awesome', 'tof'];
// const addTheWordCool = function(array) {
//   arrayWithWords.push('cool');
//   return array;
// };

// console.log(arrayWithWords);
// console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'tof']));

// const arrayWithFruits = ['appels', 'peren', 'citroenen'];
// const amountOfElementsInArray = function(array) {
//   return array.length;
// };

// console.log(amountOfElementsInArray(arrayWithFruits));
// console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // 3

// const Benelux = ['Belgie', 'Nederland', 'Luxemburg'];
// const selectBelgiumFromBenelux = array => Benelux[0];

// console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg']));
// // resultaat: "Belgie"

// const lastElementInArray = array => array[array.length - 1];
// console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));
// // resultaat: "Schildpad"

// const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];
// const impeachTrumpSlice = function(array) {
//   const newArray = array.slice(1, 4);
//   return newArray;
// };

// // slice kopieert de gekozen elementen en plaatst deze in nieuwe array, en past dus de oorspronkelijke array niet aan. Standaard krijg je een return van die nieuwe array (ingekort), de oorspronkelijke is onveranderd.
// // bovenstaande is hetzelfde als
// const impeachTrumpSlice2 = array => array.slice(1);

// const impeachTrumpSplice = function(array) {
//   const removeFirstElement = array.splice(0, 1);
//   return array;
// };

// // splice verwijdert de gekozen elementen en plaatst deze in nieuwe array, en past dus de oorspronkelijke array wel aan. Standaard krijg je een return van die nieuwe array (verwijderde items), de oorspronkelijke is veranderd.
// // bovenstaande is dus niet hetzelfde als hieronder, want de arrow function geeft alleen het verwijderde element in nieuwe Array
// const impeachTrumpSplice2 = array => array.splice(0, 1);

// console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
// console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
// console.log(impeachTrumpSlice2(presidents));
// console.log(impeachTrumpSplice2(presidents));

// const stringsInArray = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
// // const stringsTogether = function(array) {
// //   return array.join(' ');
// // };

// const stringsTogether = array => array.join(' ');

// console.log(stringsTogether(stringsInArray));
// console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));
// //resultaat: "Winc Academy is leuk ;-}"

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(array1, array2));
// result should be [1,2,3,4,5,6]
