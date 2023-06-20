function sumNums(input) {
  let index = 0;
  let firstNum = Number(input[index]);
  index++;

  let sum = 0;

  while (sum < firstNum) {
    let num = Number(input[index]);
    index++;
    sum += num;
  }

  console.log(sum);
}
