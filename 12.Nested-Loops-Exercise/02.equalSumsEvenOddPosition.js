function equalSums(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);

  let result = "";

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let evenPositionSum = 0;
    let oddPositionSum = 0;

    let currNumAsStr = String(curNum);

    for (let i = 0; i < currNumAsStr.length; i++) {
      let curDigit = Number(currNumAsStr[i]);

      if (i % 2 === 0) {
        evenPositionSum += curDigit;
      } else {
        oddPositionSum += curDigit;
      }
    }
    if (evenPositionSum === oddPositionSum) {
      result += currNumAsStr + " ";
    }
  }
  console.log(result);
}
