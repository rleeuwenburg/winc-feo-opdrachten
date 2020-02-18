/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = number => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // de timeout is niet nodig maar wel een mooie oefening
      if (number > 10) {
        resolve(number + ' is greater than 10');
      } else {
        reject(number + ' is less than or equal to 10');
      }
    }, 2000);
  });
};

testNum(12)
  .then(result => console.log(result))
  .catch(error => console.log(error));
