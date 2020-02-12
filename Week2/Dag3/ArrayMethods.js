const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
];

const filteredItems = items.filter(item => {
  return item.price <= 100;
});

console.log(items);
console.log(filteredItems);

const itemNames = items.map(item => {
  return item.name;
});

const itemPrices = items.map(item => {
  return item.price;
});

console.log(itemNames);
console.log(itemPrices);

const foundItem = items.find(item => {
  return item.name === 'Album';
});

console.log(foundItem);

items.forEach(item => {
  console.log(item.price);
});

const hasCheapItems = items.some(item => {
  return item.price <= 100;
});

console.log(hasCheapItems);

const hasCheapItems2 = items.every(item => item.price <= 100);
console.log(hasCheapItems2);

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

const simpleArray = [1, 2, 3, 4, 5];
const includesTwo = simpleArray.includes(2);
console.log(includesTwo);
