console.log("Spread operator");

const student = {
  firstName: "virendra",
  lastName: "patel",
  age: 24,
  position: "software engineer",
  address: {
    city: "jBP",
  },
};

const studentCopy = {
  ...student,
};

studentCopy.address.city = "Mumbai";

// console.log(student == studentCopy);
// console.log(studentCopy.address == student.address);
// console.log(studentCopy, student);

const numbers = [1, 2, 3, 4, 5];

const numbers2 = [...numbers];

console.log(numbers == numbers2);

console.log(numbers2, numbers);
