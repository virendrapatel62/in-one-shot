const students = ["Vrendra", 'Harsh']
const numbers = [1, 23, 4]

function getFirstElement<T, U>(list1: T[], list2: U[]) {
    return [list1[0], list2[0]] as [T, U] // [string , number]
}

let firstItem = getFirstElement(students, numbers)
const s = firstItem[0]
const n = firstItem[1]
