const calculateSupply = function(age, dailyAmount) {
  let lifetimeSupply = (80 - age) * 365 * dailyAmount;
  let message =
    'You will need ' +
    lifetimeSupply +
    ' to last you until the ripe old age of 80';
  console.log(message);
};

calculateSupply('40', '2');
