function cake(input) {
  let index = 0;
  let cakeL = Number(input[index]);
  index++;
  let cakeW = Number(input[index]);
  index++;
  let cakeLeft = cakeW * cakeL;

  let pieceSize = 1 * 1;
  let command = input[index];
  index++;
  let isCakeFinished = false;

  while (command !== "STOP") {
    let numberPieces = Number(command);
    cakeLeft -= numberPieces;

    if (cakeLeft <= 0) {
      isCakeFinished = true;
      break;
    }

    command = input[index];
    index++;
  }

  if (isCakeFinished) {
    console.log(
      `No more cake left! You need ${Math.abs(cakeLeft)} pieces more.`
    );
  } else {
    console.log(`${cakeLeft} pieces are left.`);
  }
}
