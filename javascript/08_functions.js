console.log("Hello world to the functions");

// function sum() {
//   const a = 20;
//   const b = 10;
//   const ans = a + b;
//   console.log(ans);
// }

// function sum(a, b) {
//   const ans = a + b;
//   return ans;
// }

// const ans1 = sum(10, 100);
// const ans2 = sum(ans1, 40);

// console.log("Ans1 : ", ans1);
// console.log("Ans2 : ", ans2);

// function sayHello() {
//   console.log("Hello User");
// }
// const greet = sayHello;

// greet();

function sendEmail() {
  console.log("Sending confirmation email to user");
}
function sendNotification() {
  console.log("Sending confirmation Notificaton to user");
}

// higerOrderFunction - placeOrder
// callback function - sendEmail & sendNotificaiton

function placeOrder(item, actionAfterOrder) {
  console.log("Order Placed", item);
  actionAfterOrder();
}

placeOrder("Pizza", sendEmail);
placeOrder("Burgur", sendNotification);
