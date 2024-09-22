console.log("More on Objects");

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function getAverage(grades) {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
    // sum = sum + grade
  });

  return sum / grades.length;
}

const studentFirstName = "virendra";
const studentLastName = "patel";
const studentAge = 24;
const studentGrade = [78, 85, 87, 87, 76, 67];
const fullName = getFullName(studentFirstName, studentLastName);
const averageMarks = getAverage(studentGrade);

console.log(fullName, averageMarks);
