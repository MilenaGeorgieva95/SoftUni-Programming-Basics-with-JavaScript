function sumOfNums(input) {
  let text = input[0];
  let sum = 0;
  for (let i = 0; i < text.length; i++) {
    let num = Number(text[i]);
    sum += num;
  }
  console.log(`The sum of the digits is:${sum}`);
}
