console.log("Rest operator");

const student = {
  firstName: "virendra",
  lastName: "patel",
  age: 24,
  position: "software engineer",
};

const { age, position, ...name } = student;
console.log(age, position, name);

const numbers = [1, 3, 5, 10, 14, 20];
const [one, three, five, ...evenNumbers] = numbers;

console.log(one, three, five, evenNumbers);
