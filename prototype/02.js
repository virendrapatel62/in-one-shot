const prototypeStudent = {
  name: "",
  age: -1,
  run: function () {
    console.log(`${this.name} is running at age ${this.age}`);
  },
};

function createStudentObject(name, age) {
  const student = Object.create(prototypeStudent);
  student.name = name;
  student.age = age;
  return student;
}

const student = createStudentObject("Virendrta", 24);
const student2 = createStudentObject("Harsh", 27);

student.run();
student2.run();
