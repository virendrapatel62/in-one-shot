// Union type
let value: string | number
value = 90
value = 'Virendra'

type TGender = "male" | "female"
// value = true

// type ATStudent = {
//     name: string, age: number, gender: TGender
// }


interface ATStudent {
    name: string, age: number, gender: TGender
}
type ATEmployee = {
    company: string, years: number
}

type ATSoftwareEngineer = ATStudent & ATEmployee

const se: ATSoftwareEngineer = {
    age: 90, company: "f", name: 'harsh', years: 90, gender: 'male'
}

let gender: TGender = "male"
gender = "female"





export { }