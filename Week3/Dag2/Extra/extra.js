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

/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order.
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    if (
      array.every(item => {
        return typeof item === 'string'; //condition die checked of de array alleen mar strings bevat. Indien niet => reject)
      })
    ) {
      resolve(
        sortWords(
          // na de resolve actie hieronder chain met sortWords
          array.map(item => {
            return item.toUpperCase(); // resolve actie die van alle strings in array hoofdletters maakt
          })
        )
      );
    } else {
      reject('item is geen string');
    }
  });
};

const sortWords = array => {
  return new Promise((resolve, reject) => {
    if (array) {
      resolve(array.sort()); //
    } else {
      reject('alleen strings');
    }
  });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords(arrayOfWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));
