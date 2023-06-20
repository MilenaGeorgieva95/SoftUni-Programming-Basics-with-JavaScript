function division(input) {
  let numsCount = Number(input[0]);
  let nums2 = 0;
  let nums3 = 0;
  let nums4 = 0;

  for (let i = 1; i <= numsCount; i++) {
    let currNum = Number(input[i]);

    if (currNum % 2 === 0) {
      nums2++;
    }
    if (currNum % 3 === 0) {
      nums3++;
    }
    if (currNum % 4 === 0) {
      nums4++;
    }
  }

  let num2Percent = (nums2 / numsCount) * 100;
  let num3Percent = (nums3 / numsCount) * 100;
  let num4Percent = (nums4 / numsCount) * 100;

  console.log(num2Percent.toFixed(2) + "%");
  console.log(num3Percent.toFixed(2) + "%");
  console.log(num4Percent.toFixed(2) + "%");
}
