console.log("Hoisting.js");

console.log(username);
sayHello();

var username = "virendra";

// function sayHello() {
//   console.log("Say  Hello function  ");
// }

var sayHello = () => {
  console.log("Say Hello Function");
};
