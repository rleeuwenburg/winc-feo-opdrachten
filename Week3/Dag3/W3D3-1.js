// const sumAll = function(...numbers) {
//   return numbers.reduce((currentTotal, number) => {
//     return number + currentTotal;
//   });
// };

// console.log(sumAll(1, 2, 3, 4, 5));

// const sum = function(item1, item2, item3, item4, item5) {
//   return item1 + item2 + item3 + item4 + item5;
// };

// const sumItems = [1, 2, 3, 4, 5];
// console.log(sum(...sumItems));

// Extra opdrachten
function howMany(...args) {
  return 'You have passed ' + args.length + ' arguments.';
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany('string', null, [1, 2, 3], {})); // You have passed 4 arguments.

// The result of sum(0,1,2) should be 3
// The result of sum(1,2,3,4) should be 10
// The result of sum(5) should be 5
// The result of sum() should be 0
// The sum function should use the ... rest parameter on the args parameter.

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3)); // 6

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());
