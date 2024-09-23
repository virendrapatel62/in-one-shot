// function getData(callback) {
//   setTimeout(() => {
//     callback([1, 2, 3, 4]);
//   }, 2000);
// }

// function getData() {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve([1, 2, 3, 4]);
//     }, 2000);
//   });
// }

console.log("Getting Dataa");

// getData().then((data) => {
//   console.log(data);
// });

console.log("Line Before getting data");

// getData()
//   .then((r) => {
//     return 1;
//   })
//   .then((data) => {
//     return 2;
//   })
//   .then((data) => {
//     console.log(data); //2
//   })
//   .catch((e) => {})
//   .finally(() => {
//     console.log("Finalu");
//   });

function resolveAfter(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside interval");
      resolve(`REsolving after ${sec} sec`);
    }, sec * 1000);
  });
}

// Promise.all([resolveAfter(10), resolveAfter(2), resolveAfter(5)])
// .then((result) => {
//   console.log(result);
// });

const p1 = resolveAfter(2);
const p2 = p1;

p1.then((r) => console.log("Done"));
p2.then((r) => console.log("Done again"));

// resolveAfter(2).then((r) => console.log(r));
// resolveAfter(5).then((r) => console.log(r));
// resolveAfter(10).then((r) => console.log(r));
