function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magic = Number(input[2]);

  let isMagic = false;
  let firstNum = 0;
  let secNum = 0;
  let counter = 0;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      let sum = x + y;
      counter++;
      if (sum === magic) {
        firstNum = x;
        secNum = y;
        isMagic = true;
        break;
      }
    }
    if (isMagic) {
      break;
    }
  }

  if (isMagic) {
    console.log(
      `Combination N:${counter} (${firstNum} + ${secNum} = ${magic})`
    );
  } else {
    console.log(`${counter} combinations - neither equals ${magic}`);
  }
}
