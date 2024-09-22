class Student {
  firstName;
  lastName;
  age;
  grades;

  constructor(firstName, lastName, age, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grades = grades;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getAverageMarks() {
    let sum = 0;
    this.grades.forEach((grade) => {
      sum += grade;
    });
    return sum / this.grades.length;
  }
}

const student = new Student("Virendra", "Patel", 24, [78, 68, 89, 67, 88, 56]);
const fullName = student.getFullName();
const avgMarks = student.getAverageMarks();

const student2 = new Student("Harsh", "jain", 24, [78, 68, 89, 67, 88, 56]);

console.log(fullName, avgMarks, student);
console.log(student2.getFullName(), student2.getAverageMarks());
