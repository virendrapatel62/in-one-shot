console.log("Template literal");

const student = {
  firstName: "virendra",
  lastName: "patel",
};

// const fullName = student.firstName + " " + student.lastName;
// const message = "My full Name is " + fullName;

const fullName = `${student.firstName} ${student.lastName}`;
const message = `My full Name is ${fullName}`;

console.log(fullName);
console.log(message);

// const tl = `this is string with backtick`;

// console.log(typeof tl);
