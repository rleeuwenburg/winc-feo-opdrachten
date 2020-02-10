let assignGrade = function(numberScore) {
  if (numberScore > 90) {
    return 'A';
  } else if (numberScore > 80) {
    return 'B';
  } else if (numberScore > 70) {
    return 'C';
  } else if (numberScore > 60) {
    return 'D';
  } else {
    return 'F';
  }
};

// console.log('You got a ' + assignGrade(95));
// console.log('You got a ' + assignGrade(85));
// console.log('You got a ' + assignGrade(75));
// console.log('You got a ' + assignGrade(65));
// console.log('You got a ' + assignGrade(55));

for (i = 100; i >= 60; i--) {
  console.log('For score of ' + i + ', you got a ' + assignGrade(i));
}
