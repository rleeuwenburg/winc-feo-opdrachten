const calculateDogAge = function(puppyAge, conversionRate) {
  let dogYears = puppyAge * conversionRate;
  console.log('Your doggie is ' + dogYears + ' years old in dog years!');
};

calculateDogAge('4', '7');
