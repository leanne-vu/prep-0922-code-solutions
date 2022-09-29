function sumexercise(x, y) {
  return x + y;
}

var sum = sumexercise(4, 4);
console.log('example:', sum);

function addTwoNumbers(x, y) {
  return x + y;
}
var answer = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', answer);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var product = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', product);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var result = getGreeting('Tim');
console.log('getGreeting exercise:', result);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}
var addplusmultiply = addAndMultiplyBy5(10, 5);
console.log('addAndMulttiplyBy5 exercise:', addplusmultiply);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}
var multiplyplusdivide = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyplusdivide);

function subtractTwoNumbers(x, y) {
  return x - y;
}
var subtraction = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtraction);

function getCircleCircumference(x) {
  return 2 * Math.PI * x;
}
var circumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Leanne', 'Vu');
console.log('getFullName exercise:', fullName);

function cube(x) {
  return x * x * x;
}
var cuberesults = cube(5);
console.log('cube exercise:', cuberesults);
