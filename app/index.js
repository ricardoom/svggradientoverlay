
// SVG <stop ></stop>
// const stopElement = document.querySelector('[offset]');
const stopElement = document.querySelectorAll('[offset]');
const containerElements = document.querySelectorAll('.container');
console.log(stopElement);

import colorable from 'colorable';

//import { colorable } from 'colorable';

var colors = {
  red: 'red',
  green: 'green',
  blue: 'blue',
  darkBlue: '#345678',
  white: '#fff'
};
var options = {
  compact: true,
  threshold: 0 
};
var result = colorable(colors, options);

// var resultObjectAsArray = result.forEach(color => console.log(color.combinations));

// now write some logic here to map your accessible colors to the backgrounds of each container...

// grab the containers

// console.log(containerElements.style);


// const containerBackGrounds = containerElements.forEach(container => container.style.backgroundColor = '#fa2c3f');




