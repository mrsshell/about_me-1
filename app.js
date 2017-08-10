'use strict';

var userName = prompt('Greetings! Please enter your name.');
console.log('Greetings! Please enter your name.');
console.log('A: ' + userName);

var tally = 0;

function question1 () {
  var pButter = prompt('Do I like peanut butter?').toLowerCase();
  console.log('Q: Do I like peanut butter?');
  console.log('A: ' + pButter);
  if (pButter === 'y' || pButter === 'yes') {
    alert('Yes! That\'s my favorite food.');
    tally++;
  } else {
    alert('You\'re wrong.');
  }
}
question1();

function question2 () {
  var city = prompt('Have I ever been to Chicago?').toLowerCase();
  console.log('Q : Have I ever been to Chicago?');
  console.log('A: ' + city);
  if (city === 'y' || city === 'yes') {
    alert('Yep! That\'s where I\'m from.');
    tally++;
  } else {
    alert('Nope. I was born there.');
  }
}
question2();

function question3 () {
  var podCast = prompt('Do I listen to podcasts?').toLowerCase();
  console.log('Q: Do I listen to podcasts?');
  console.log('A: ' + podCast);
  if (podCast === 'y' || podCast === 'yes') {
    alert('Correct! There are so many great ones to listen to.');
    tally++;
  } else {
    alert('I listen to them all of the time.');
  }
}
question3();

function question4 () {
  var hike = prompt('Is hiking one of my hobbies?').toLowerCase();
  console.log('Q: Is hiking one of my hobbies?');
  console.log('A: ' + hike);
  if (hike === 'y' || hike === 'yes') {
    alert('Correct. We should get outside when we\'re not coding.');
    tally++;
  } else {
    alert('Oops. You\'re wrong.');
  }
}
question4();

function question5 () {
  var learnCode = prompt('Am I trying to learn to code?').toLowerCase();
  console.log('Q: Am I trying to learn to code?');
  console.log('A: ' + learnCode);
  if (learnCode === 'y' || learnCode === 'yes') {
    alert('You\'re right, I am!');
    tally++;
  } else {
    alert('Wrong.');
  }
}
question5();

var correctNum = 17;
var numGuess = 0;
function question6 () {
  while (numGuess < 4) {
    var userNum = prompt('Guess a number between 1 and 100. You have 4 attempts.');
    console.log('Guess a number between 1 and 100. You have 4 attempts.');
    console.log('A: ' + userNum);
    if (userNum === correctNum) {
      alert('Nice! You got it right!');
      tally++;
      break;
    } else if (userNum < 17 && parseInt(userNum) > 0) {
      alert('Incorrect. The number is larger than that.');
    } else if (userNum > 17 && parseInt(userNum) < 100) {
      alert('Incorrect. The number is smaller than that.');
    } else {
      alert('Follow the instructions. Only numbers between 1 and 100.');
    }
    numGuess++;
  }
}
question6();

var countries = ['ireland', 'germany', 'iraq', 'afghanistan', 'kuwait', 'jordan', 'united arab emirates', 'turkey', 'south korea'];
function question7 () {
  var totalGuesses = 0;

  while (totalGuesses < 6) {
    var countryGuess = prompt('Can you guess a country outside of the U.S. I\'ve visited? You have 6 tries.').toLowerCase();
    console.log('Can you guess a country outside of the U.S. I\'ve visited? You have 6 tries.');
    console.log('A: ' + countryGuess);
    if (countries.includes(countryGuess)) {
      alert('Your guess of ' + countryGuess + ' is correct!');
      tally++;
      break;
    } else {
      alert('Nope. Try again.');
      totalGuesses++;
    }
  }
}
question7();

function buildList () {
  var countryList = '';
  for (var i = 0; i < countries.length; i++) {
    if (i != countries.length - 1) {
      countryList = countryList + countries[i] + ', ';
    } else {
      countryList = countryList + countries[i];
    }
  }
  alert('The possible answers were ' + countryList + '.');
}
buildList();

alert(userName + ', You got ' + tally + ' of 7 questions right!');
console.log(tally);
