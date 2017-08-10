'use strict';

var userName = prompt('Greetings! Please enter your name.');
console.log('Greetings! Please enter your name.');
console.log('A: ' + userName);

var pButter = prompt('Do I like peanut butter?').toLowerCase();
console.log('Q: Do I like peanut butter?');
console.log('A: ' + pButter);
if (pButter === 'y' || pButter === 'yes') {
  alert('Yes! That\'s my favorite food.');
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
  var userNum = parseInt(prompt('Guess a number between 1 and 100. You have 4 attempts.'));
  console.log('Guess a number between 1 and 100. You have 4 attempts.');
  console.log('A: ' + userNum);
  if (userNum === correctNum) {
    alert('Nice! You got it right!');
    break;
  } else {
    alert('Incorrect.');
    numGuess++;
  }
}

var countries = ['ireland', 'germany', 'iraq', 'afghanistan', 'kuwait', 'jordan', 'united arab emirates', 'turkey'];
var totalGuesses = 0;

while (totalGuesses < 6) {
  var countryGuess = prompt('Can you guess a country outside of the U.S. I\'ve visited? You have 6 tries.').toLowerCase();
  console.log('Can you guess a country outside of the U.S. I\'ve visited? You have 6 tries.');
  console.log('A: ' + userNum);
  if (countryGuess.includes(countries)) {
    alert('Your guess of' + countryGuess + ' is correct!');
    break;
  } else {
    alert('Nope. Try again.');
    totalGuesses++;
  }
}

var countryList = '';
for (var i = 0; i < countries.length; i++) {
  if (i != countries.length - 1) {
    countryList = countryList + countries[i] + ', ';
  } else {
    countryList = countryList + countries[i];
  }
}
alert('The possible answers were ' + countryList + '.');
