'use strict';

var pButter = prompt('Do you like peanut butter?').toLowerCase();
console.log('Q: Do you like peanut butter?');
console.log('A: ' + pButter);
if (pButter === 'y' || pButter === 'yes') {
  alert('Nice! That\'s my favorite food.');
} else {
  alert('You\'re missing out.');
}

var city = prompt('Have you ever been to Chicago?').toLowerCase();
console.log('Q : Have you ever been to Chicago?');
console.log('A: ' + city);
if (city === 'y' || city === 'yes') {
  alert('Cool! That\'s where I\'m from.');
} else {
  alert('You should visit.');
}

var podCast = prompt('Do you listen to podcasts?').toLowerCase();
console.log('Q: Do you listen to podcasts?');
console.log('A: ' + podCast);
if (podCast === 'y' || podCast === 'yes') {
  alert('Awesome! There are so many great ones to listen to.');
} else {
  alert('Give them a try. I\'m sure there are some out there that you\'ll enjoy.');
}

var hike = prompt('Is hiking one of your hobbies?').toLowerCase();
console.log('Q: Is hiking one of your hobbies?');
console.log('A: ' + hike);
if (hike === 'y' || hike === 'yes') {
  alert('Neat. We should get outside when we\'re not coding.');
} else {
  alert('It\'s not for everyone.');
}

var learnCode = prompt('Are you trying to learn to code?').toLowerCase();
console.log('Q: Are you trying to learn to code?');
console.log('A: ' + hike);
if (learnCode === 'y' || learnCode === 'yes') {
  alert('So am I!');
} else {
  alert('I bet you have lots of free time.');
}
