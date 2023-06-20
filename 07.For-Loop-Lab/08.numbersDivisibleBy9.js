function numsDivisibleBy9(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let sum = 0;
  let c = 0;
  for (let i = a; i <= b; i++) {
    if (i % 9 === 0) {
      sum += i;
    }
  }
  console.log(`The sum: ${sum}`);
  for (let i = a; i <= b; i++) {
    if (i % 9 === 0) {
      console.log(i);
    }
  }
}
