const prototypePerson = {
  name: "",
  age: 0,
  run: function () {
    console.log(`${this.name} is running at age ${this.age}`);
  },
};

// prototypePersion.__proto__ = Object.prototype
// prototypeStudent.__proto__ = prototypePerson;

const prototypeStudent = {
  schoo: "",
  grades: [],
  read: function () {
    console.log("Reading..");
  },
};
// prototypeStudent.__proto__ = prototypePerson;
Object.setPrototypeOf(prototypeStudent, prototypePerson);

const student = Object.create(prototypeStudent);
student.run();
student.read();

console.log(Object.getPrototypeOf(prototypePerson));
console.log(Object.getPrototypeOf(prototypeStudent));
console.log(Object.getPrototypeOf(student));
