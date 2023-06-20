function eastereggsBattle(input) {
  let index = 0;
  let eggs1 = Number(input[index]);
  index++;
  let eggs2 = Number(input[index]);
  index++;

  let command = input[index];
  index++;
  let isEggs1Winner = false;
  let isEggs2Winner = false;

  while (command !== "End") {
    let currWinner = command;
    command = input[index];
    index++;

    switch (currWinner) {
      case "one":
        eggs2--;
        break;
      case "two":
        eggs1--;
        break;
    }

    if (eggs1 === 0) {
      isEggs2Winner = true;
      break;
    } else if (eggs2 === 0) {
      isEggs1Winner = true;
      break;
    }
  }
  if (isEggs1Winner) {
    console.log(
      `Player two is out of eggs. Player one has ${eggs1} eggs left.`
    );
  } else if (isEggs2Winner) {
    console.log(
      `Player one is out of eggs. Player two has ${eggs2} eggs left.`
    );
  } else {
    console.log(`Player one has ${eggs1} eggs left.`);
    console.log(`Player two has ${eggs2} eggs left.`);
  }
}
