function sumSeconds(input) {
  let secA = Number(input[0]);
  let secB = Number(input[1]);
  let secC = Number(input[2]);

  let totalSeconds = secA + secB + secC;
  let minsToPrint = Math.floor(totalSeconds / 60);
  let secondsToPrint = totalSeconds % 60;

  if (secondsToPrint < 10) {
    console.log(`${minsToPrint}:0${secondsToPrint}`);
  } else {
    console.log(`${minsToPrint}:${secondsToPrint}`);
  }
}

sumSeconds(["44", "46", "45"]);
