function Student(name, age) {
  this.name = name;
  this.age = age;
}

const prototype = Student.prototype;
prototype.run = function () {
  console.log("Student running");
};

const student1 = new Student("virendra", 20);
const student2 = new Student("harsh", 25);

student1.run();
student2.run();
