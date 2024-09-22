console.log("Destructuring js");
const student = {
  firstName: "virendra",
  lastName: "patel",
  age: 24,
  position: "software engineer",
  address: {
    city: "Jabalpur",
    state: "MP",
    pincode: 483001,
  },
};

// const firstName = student.firstName;
// const age = student.age;
// const address = student.address;
// const pincode = address.pincode;

const { firstName, age, address, lastName, position } = student;
const { city, pincode, state } = address;

console.log(firstName, lastName, position, address);
console.log(city, pincode, state);

const grades = [99, 100, 97];

// const hindi = grades[0];
// const maths = grades[1];
// const english = grades[2];
const [hindi, maths, english] = grades;

console.log(hindi, maths, english);
