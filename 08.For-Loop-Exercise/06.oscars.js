function oscars(input) {
  let actorName = input[0];
  let startingPoints = Number(input[1]);
  let qtyJury = Number(input[2]) * 2;

  for (let i = 3; i <= qtyJury + 2; i += 2) {
    juryName = input[i];
    juryPoint = Number(input[i + 1]);

    startingPoints += (juryName.length * juryPoint) / 2;

    if (startingPoints >= 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }

  if (startingPoints < 1250.5) {
    console.log(
      `Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(
        1
      )} more!`
    );
  }
}
