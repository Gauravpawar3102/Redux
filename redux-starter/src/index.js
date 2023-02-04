function sayHello() {
  return 'Hello World';
}
// const greet = sayHello();
function greet(fnMessage) {
  console.log(fnMessage());
}
greet(sayHello);
