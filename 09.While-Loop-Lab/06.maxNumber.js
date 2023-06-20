function maxNums(input) {
  let index = 0;
  let command = input[index];
  index++;
  let maxNum = Number.MIN_SAFE_INTEGER;

  while (command !== "Stop") {
    let currNum = Number(command);

    if (currNum > maxNum) {
      maxNum = currNum;
    }
    command = input[index];
    index++;
  }

  console.log(maxNum);
}
