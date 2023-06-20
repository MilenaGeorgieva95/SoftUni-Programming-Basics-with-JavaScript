function basketballTournament(input) {
  let index = 0;
  let command = input[index];
  index++;

  let win = 0;
  let loss = 0;

  while (command !== "End of tournaments") {
    let tournamentName = command;
    let tournamentsCount = Number(input[index]);
    index++;

    let currScore = 0;
    let currScore2 = 0;
    let gameCount = 0;

    for (let i = 0; i < tournamentsCount; i++) {
      gameCount++;

      let currTeamScore = Number(input[index]);
      index++;
      let currTeam2Score = Number(input[index]);
      index++;
      currScore += currTeamScore;
      currScore2 += currTeam2Score;

      if (currTeamScore > currTeam2Score) {
        console.log(
          `Game ${gameCount} of tournament ${tournamentName}: win with ${
            currTeamScore - currTeam2Score
          } points.`
        );
        win++;
      } else {
        console.log(
          `Game ${gameCount} of tournament ${tournamentName}: lost with ${
            currTeam2Score - currTeamScore
          } points.`
        );
        loss++;
      }
    }

    command = input[index];
    index++;
  }
  let totalMatchesCount = win + loss;
  let wins = (win / totalMatchesCount) * 100;
  console.log(wins.toFixed(2) + "% matches win");
  let losses = (loss / totalMatchesCount) * 100;
  console.log(losses.toFixed(2) + "% matches lost");
}
