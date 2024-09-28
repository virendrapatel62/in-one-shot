"use strict";
const students = ["Vrendra", 'Harsh'];
const numbers = [1, 23, 4];
function getFirstElement(list1, list2) {
    return [list1[0], list2[0]]; // [string , number]
}
let firstItem = getFirstElement(students, numbers);
const s = firstItem[0];
const n = firstItem[1];
