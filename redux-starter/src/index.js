//** 04-02 */
// function sayHello() {
//   return function () {
//     return 'Hello World';
//   };
// }

// let fn = sayHello();
// let message = fn();

// console.log(message);

// const greet = sayHello();
// function greet(fnMessage) {
//   console.log(fnMessage());
// }
// greet(sayHello);

// let numbers = [1,2,3]
// numbers.map(number => number * 2)

// * function composition
// let input = " Javascript ";
// let output  = "<div"+input.trim()+"</div>";
// import { compose, pipe } from 'lodash/fp';
// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const result = pipe(trim, wrapInDiv);
// let result = (input) => wrapInDiv(trim(input));
// console.log(result('hey guys'));

// * currying
// import { compose, pipe } from 'lodash/fp';

// const trim = (str) => str.trim();

// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// // const result = (str = pipe(trim(str), wrap('div')));
// let result = (str, type) => wrap(type)(trim(str));
// console.log(result(' hey guys ', 'div'));

// const trim = (str) => str.trim();

// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// const transform = pipe(trim, wrap('div'));
// console.log(transform('  hey  '));

//*updating objects

const person = {
  name: 'john',
  address: {
    country: 'INDIA',
    city: 'Hyderabad',
  },
};
const updated = {
  ...person,
  address: {
    ...person.address,
    city: 'Patna',
  },
};
console.log(person);
console.log(updated);
