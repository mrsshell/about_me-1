'use strict';

var userName = prompt('Greetings! Please enter your name.');
console.log('Greetings! Please enter your name.');
console.log('A: ' + userName);

//change .toLowerCase() to be included within the if statements
var pButter = prompt('Do I like peanut butter?').toLowerCase();
console.log('Q: Do I like peanut butter?');
console.log('A: ' + pButter);
if (pButter === 'y' || pButter === 'yes') {
  alert('Nice! That\'s my favorite food.');
} else {
  alert('You\'re wrong.');
}

var city = prompt('Have I ever been to Chicago?').toLowerCase();
console.log('Q : Have I ever been to Chicago?');
console.log('A: ' + city);
if (city === 'y' || city === 'yes') {
  alert('Yep! That\'s where I\'m from.');
} else {
  alert('Nope. I was born there.');
}

var podCast = prompt('Do I listen to podcasts?').toLowerCase();
console.log('Q: Do I listen to podcasts?');
console.log('A: ' + podCast);
if (podCast === 'y' || podCast === 'yes') {
  alert('Correct! There are so many great ones to listen to.');
} else {
  alert('I listen to them all of the time.');
}

var hike = prompt('Is hiking one of my hobbies?').toLowerCase();
console.log('Q: Is hiking one of my hobbies?');
console.log('A: ' + hike);
if (hike === 'y' || hike === 'yes') {
  alert('Correct. We should get outside when we\'re not coding.');
} else {
  alert('Oops. You\'re wrong.');
}

var learnCode = prompt('Am I trying to learn to code?').toLowerCase();
console.log('Q: Am I trying to learn to code?');
console.log('A: ' + hike);
if (learnCode === 'y' || learnCode === 'yes') {
  alert('You\'re right, I am!');
} else {
  alert('Wrong.');
}

var correctNum = 17;
var numGuess = 0;

while (numGuess < 4) {
  var userNum = parseInt(prompt('Guess a number between 1 and 100.'));
  console.log('Guess a number between 1 and 100.');
  console.log('A: ' + userNum);
  if (userNum === correctNum) {
    alert('Nice! You got it right!');
    break;
  } else {
    alert('Incorrect. Guess again.');
    numGuess++;
  }
}
