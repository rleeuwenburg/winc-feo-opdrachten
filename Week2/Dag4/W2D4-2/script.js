// alert('ja, we zijn verbonden');

// document = defined by browser
const buttons = document.querySelectorAll('.big-five-button');
console.log(buttons);

const removeFirstItemButton = document.getElementById(
  'remove-first-item-button'
);

const removeAllItemsButton = document.getElementById('remove-all-button');

// onderstaande werkt niet meer als lijst leeg is, begrijp niet helemaal waarom.
// const spottedAnimalsListParent = document.getElementById(
//   'spotted-animals-list'
// );
// let spottedAnimalsRemoveFirst = spottedAnimalsListParent.getElementsByTagName(
//   'li'
// )[0];
// const removeFirstItem = function(event) {
//   spottedAnimalsListParent.removeChild(spottedAnimalsRemoveFirst);
//   spottedAnimalsRemoveFirst = spottedAnimalsListParent.getElementsByTagName(
//     'li'
//   )[0];
// };

// Array.from is overbodig, buttons is al een array
// Array.from(buttons).forEach(function(buttonClick) {
//   buttonClick.addEventListener('click', function(event) {
//     console.log(event);
//     console.log(event.target.innerText);
//   });
// });

// buttons.forEach(function(buttonClick) {
//   buttonClick.addEventListener('click', function(event) {
//     console.log(event);
//     console.log(event.target.innerText);
//   });
// });

const animalSpotted = function(event) {
  console.log('spotted:', event.target.innerText);
  const spottedAnimal = event.target.innerText;
  console.log(spottedAnimal);
  const listItemSpottedAnimal = document.createElement('li');
  listItemSpottedAnimal.innerHTML = spottedAnimal;
  const spottedAnimalList = document.querySelector(' #spotted-animals-list');
  spottedAnimalList.appendChild(listItemSpottedAnimal);
};

const removeFirstItem = function(event) {
  const spottedAnimalsRemoveFirst = document.getElementById(
    'spotted-animals-list'
  ).firstChild;
  spottedAnimalsRemoveFirst.remove();
};

const removeAllItems = function(event) {
  const parent = document.getElementById('spotted-animals-list');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener('click', animalSpotted);
  });

  removeFirstItemButton.addEventListener('click', removeFirstItem);

  removeAllItemsButton.addEventListener('click', removeAllItems);
});
