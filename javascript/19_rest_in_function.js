function sum(...numbers) {
  let ans = 0;

  numbers.forEach((element) => {
    ans += element;
  });

  return ans;
}

// const ans = sum();
const ans = sum(1, 2, 3, 4);

console.log(ans);
