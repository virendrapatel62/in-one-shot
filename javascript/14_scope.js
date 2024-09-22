const outerVariable = "some values";
var student = { name: "viren" };

if (true) {
  var insideIF = "---";
}

{
  let username = "virendra";
  var insideScope = "ke";
  console.log("Hello", outerVariable);
}

function sayHello() {
  console.log(insideFunction);
  let userAge = 23;

  var insideFunction = "34";
}

console.log(outerVariable);
// console.log(username, userAge,)

sayHello();

console.log(window.student);
console.log(window.insideFunction);
console.log(window.insideScope);
console.log(window.insideIF);
