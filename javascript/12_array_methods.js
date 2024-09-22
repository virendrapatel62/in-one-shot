console.log("Array Functions");

const numbers = [99, 61, 55, 44, 66, 46, 7, 56];

// for (index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }

// forEach = HOF
// callBack

numbers.forEach((number) => {
  console.log(number);
});

const newArray = numbers.map((number) => {
  return number * 2;
});

const filteredArray = numbers.filter((number) => {
  return number % 2 == 1;
});

const index = numbers.findIndex((number) => {
  return number % 2 == 0;
});

console.log(index);
