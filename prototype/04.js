const numbers = [12, 23, 34, 4, 54];
// console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype == Object.getPrototypeOf(numbers));
// console.log(Array.prototype.__proto__);

Array.prototype.sum = function () {
  let sum = 0;
  this.forEach((number) => {
    if (typeof number !== "number")
      throw new Error("Array should have numbers only..");
    sum += number;
  });
  return sum;
};

console.log(numbers.sum());
const students = [23, 2];
console.log(students.sum());
