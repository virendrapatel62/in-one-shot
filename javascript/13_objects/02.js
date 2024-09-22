const student = {
  firstName: "virendra",
  lastName: "Patel",
  age: 24,
  grades: [45, 65, 78, 98, 67, 56, 56, 87],
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getAverageMarks: function () {
    let sum = 0;
    this.grades.forEach((grade) => {
      sum += grade;
    });
    return sum / this.grades.length;
  },
};

console.log(student.firstName);
console.log(student.getAverageMarks());
console.log(student.getFullName());
