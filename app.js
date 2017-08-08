'use strict';

var pButter = prompt('Do you like peanut butter?').toLowerCase();
console.log('Q: Do you like peanut butter?');
console.log('A: ' + pButter);
if (pButter === 'y' || pButter === 'yes') {
  alert('Nice! That\'s my favorite food.');
} else {
  alert('You\'re missing out.');
}
