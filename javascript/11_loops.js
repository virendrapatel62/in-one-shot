console.log("Loops js");

function printNumber(number) {
  console.log(number);
}

// for (let i = 0; i < 100; i = i + 1) {
//   console.log("Inside loop body");
// }

// const input = prompt("How many number of times you wanna print number");

// console.log(input);

// const grades = [99, 87, 89, 76, 67];

// for (let index = 0; index < grades.length; index++) {
//   console.log(index, grades[index]);
// }

// while (sum < 100) {
//   console.log("While loop body", sum);
//   sum = sum + numbers[index];
//   index++;
// }

// console.log(sum);

let sum = 0;
let next = true;
while (next) {
  const input = Number(prompt("Enter a number"));
  sum = sum + input;

  console.log(sum);
  const ans = prompt("Do you want to add another number ?");
  if (ans == "yes") {
    next = true;
  } else {
    next = false;
  }
}

console.log(sum);
