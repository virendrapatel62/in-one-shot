type TAddress = {
    city: string;
    state: string;
};
type TStudent = {
    name: string;
    age: number;
    address: TAddress;
};
let student: TStudent;
let student2: TStudent;
let students: TStudent[] = [];

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




function addStudent(student: TStudent) {
    students.push(student)
}

function getStudents(): TStudent[] {
    return []
}

addStudent(student)
addStudent(student2)


export { }