let student;
let student2;
let students = [];
student = {
    name: "Virendra",
    age: 29,
    address: {
        city: "JBP",
        state: "MP",
    },
};
student2 = {
    name: "v",
    age: 34,
    address: {
        city: "",
        state: "",
    },
};
function addStudent(student) {
    students.push(student);
}
function getStudents() {
    return [];
}
addStudent(student);
addStudent(student2);
export {};
