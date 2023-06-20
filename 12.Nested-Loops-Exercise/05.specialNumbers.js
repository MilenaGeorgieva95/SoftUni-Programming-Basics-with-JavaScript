function specialNumbers(input) {
  let n = Number(input[0]);
  let buffer = "";

  for (let i = 1111; i <= 9999; i++) {
    let isValid = true;
    let numToString = String(i);

    for (let b = 0; b < numToString.length; b++) {
      let curCifra = Number(numToString[b]);

      if (n % curCifra !== 0) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      buffer += numToString + " ";
    }
  }
  console.log(buffer);
}
