function easterCompetition(input) {
  let index = 0;
  let breadCount = Number(input[index]);
  index++;
  let bestScore = 0;
  let bestChef = "";

  for (let i = 0; i < breadCount; i++) {
    let name = input[index];
    index++;
    let command = input[index];
    index++;
    let points = 0;

    while (command !== "Stop") {
      let currPoints = Number(command);
      points += currPoints;
      command = input[index];
      index++;
    }

    console.log(`${name} has ${points} points.`);

    if (points > bestScore) {
      bestScore = points;
      bestChef = name;
      console.log(`${name} is the new number 1!`);
    }
  }

  console.log(`${bestChef} won competition with ${bestScore} points!`);
}
