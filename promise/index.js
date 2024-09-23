// console.log("Promise Js");
// console.log("2");

// for (let index = 0; index < 10000; index++) {
//   console.log("Inside loop");
// }

// console.log("3");
// console.log("4");
// console.log("Promise Js");

// console.log("1");
// console.log("2");
// console.log("3");

// setTimeout(() => {
//   console.log("After 2 sec : step 4");
// }, 2000);

// console.log("5");
// console.log("6");
// console.log("7");

// console.log("1");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([]);
//     reject("Somthing when wrong");
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//     console.log(promise);
//   })
//   .catch((error) => {
//     console.log("Error handled", error);
//     console.log(promise);
//   });

// console.log("2");
// console.log(promise);

// console.log("3");

console.log("1");
console.log("2");
console.log("3");

const url = "https://jsonplaceholder.typicode.com/comments";
const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

// async function getData() {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log("erorr");
//   }
// }

// getData();

// response
//   .then((data) => {
//     const json = data.json();
//     return json;
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

function getPosts() {
  return fetch(postsUrl).then((response) => response.json());
}
function getComments() {
  return fetch(commentsUrl).then((response) => response.json());
}
function getUsers() {
  return fetch(usersUrl).then((response) => response.json());
}

// Promise.all; // it will return all the data , if one fails then promise will give you error
// Promise.race;
// Promise.any;

async function getData() {
  const posts = getPosts();
  const comments = getComments();
  const users = getUsers();

  //   const all = await Promise.all([posts, comments, users]);
  //   const any = await Promise.any([posts, comments, users]);

  const receResult = await Promise.race([posts, comments, users]);
  console.log(receResult);
}

// getData();

// Promise.allSettled

async function allSettledDemo() {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.reject(new Error(10));
  const p4 = Promise.resolve(10);

  Promise.allSettled([p3, p2, p1, p4]).then((response) => {
    response.forEach((result) => {
      if (result.status == "fulfilled") {
        console.log("Fullfilled");
      } else {
        console.log("Rejecxted..");
      }
    });
  });
}
allSettledDemo();

Promise.resolve(2).then((e) => {
  getRepo(e).then((e) => {
    getUsers(e).then((e) => {
      console.log("");
    });
  });
});

Promise.resolve(2)
  .then((e) => {
    return getRepo(e);
  })
  .then((e) => getUsers(e))
  .then((e) => {
    console.log(e);
  });

//   - Don’t unnecessarily wrap existing promises.
// - Always return promises in `.then()` handlers.
// - Avoid nesting promises—flatten chains instead.
// - Don’t mix promises and callbacks.
// - Always handle errors with `.catch()`.
// - Use `Promise.all()` and `Promise.race()` only when appropriate.
// - Use `async`/`await` correctly.

function getData() {
  return fetch("url").then((response) => response.json());
}
