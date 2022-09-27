var person = {
  firstName: 'Leanne',
  lastName: 'Vu',
  hobby: 'gymming'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The full name is', fullName);
person.job = 'coding';
console.log('The person has a job of', person.job);
person.previousJob = 'optometric assistant';
console.log('The person had a previous job of', person.previousJob);
console.log('The complete person object', person);
