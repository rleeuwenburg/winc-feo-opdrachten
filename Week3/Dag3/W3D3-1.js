const sumAll = function(...numbers) {
  return numbers.reduce((currentTotal, number) => {
    return number + currentTotal;
  });
};

console.log(sumAll(1, 2, 3, 4, 5));

const sum = function(item1, item2, item3, item4, item5) {
  return item1 + item2 + item3 + item4 + item5;
};

const sumItems = [1, 2, 3, 4, 5];
console.log(sum(...sumItems));
