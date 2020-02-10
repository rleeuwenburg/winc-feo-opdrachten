//cheese sandwich
//take a slice of bread.
//add cheese.
//top with slice of bread

const cheeseSandwich = function() {
  console.log('take a slice of bread.');
  console.log('add cheese.');
  console.log('top with slice of bread');
};

cheeseSandwich();

// Declare function
const makeSandwich = function(topping) {
  console.log('take a slice of bread.');
  console.log('add' + ' ' + topping);
  console.log('top with slice of bread');
  console.log('There you go, a sandwich with... ' + topping);
};

//Call function
makeSandwich();
makeSandwich('ham');
makeSandwich('salami');

const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};

console.log(calculateDiscountedPrice(100, 10));

const calculateDiscountedPrice25 = function(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};

console.log(calculateDiscountedPrice25(20, 10));
console.log(calculateDiscountedPrice25(40, 10));
