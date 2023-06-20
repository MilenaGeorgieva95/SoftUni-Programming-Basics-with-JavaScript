function trainTheTrainers(input) {
  let index = 0;
  let juryCount = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let averageScore = 0;
  let presentationsCounter = 0;
  let totalAllScore = 0;

  while (command !== "Finish") {
    let presentation = command;
    let totalScore = 0;
    presentationsCounter++;

    for (let i = 0; i < juryCount; i++) {
      let currScore = Number(input[index]);
      index++;
      totalScore += currScore;
    }

    command = input[index];
    index++;
    averageScore = totalScore / juryCount;
    console.log(`${presentation} - ${averageScore.toFixed(2)}.`);

    totalAllScore += averageScore;
  }

  console.log(
    `Student's final assessment is ${(
      totalAllScore / presentationsCounter
    ).toFixed(2)}.`
  );
}
