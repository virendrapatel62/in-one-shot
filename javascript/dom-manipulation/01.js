console.log("DOM manipulation");

// const divs = document.getElementsByTagName("div");
// // const h1 = document.getElementsByTagName("h1");

// const heading = document.getElementById("main-heading");
// const redHeadings = document.getElementsByClassName("red-heading");

// // const heading1 = h1[0];

// console.log(heading.innerHTML);
// console.log(heading.innerText);

// heading.innerText = "Main Heading changed from JS";

// const redHeadingArray = Array.from(redHeadings);

// redHeadingArray.forEach((heading) => {
//   heading.innerText = "I am red";
// });

const h1 = document.querySelectorAll("h1");
// const span = document.querySelectorAll("span");
// const span = document.querySelectorAll("h1 span");
const span = document.querySelectorAll("h1 span");

const redHeadings = document.querySelectorAll(".red-heading");

console.log(h1);
console.log(span);

console.log(redHeadings);

redHeadings.forEach((heading, index) => {
  heading.innerText = `${index + 1}: I am red`;
});

// const emailInput = document.querySelector("#email");
// const emailInput = document.querySelector("[name='email']");
const emailInput = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");

console.log(emailInput.value);
console.log(password.value);

emailInput.value = "1232@gmail.com";

const heading4 = document.querySelector(".heading-4");
console.log(heading4.style);

heading4.style.backgroundColor = "tomato";
heading4.style.color = "white";

// "background-color" : 'backgroundColor'
// color : color
//  flex-box : flexBox
