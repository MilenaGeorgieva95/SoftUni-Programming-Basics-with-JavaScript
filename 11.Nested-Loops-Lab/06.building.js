function building(input) {
  let floor = Number(input[0]);
  let apartament = Number(input[1]);

  for (let e = floor; e > 0; e--) {
    let buff = "";
    for (let a = 0; a < apartament; a++) {
      if (e === floor) {
        buff += "L" + e + "" + a + " ";
      } else if (e % 2 === 0) {
        buff += "O" + e + "" + a + " ";
      } else {
        buff += "A" + e + "" + a + " ";
      }
    }
    console.log(buff);
  }
}
