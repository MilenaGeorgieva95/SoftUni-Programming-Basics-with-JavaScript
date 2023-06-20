function tennisRanklist(input) {
  let qtyTournaments = Number(input[0]);
  let startingPoints = Number(input[1]);
  let scoreTournament = 0;
  let wins = 0;
  for (let i = 2; i <= qtyTournaments + 1; i++) {
    let scoreLetter = input[i];
    switch (scoreLetter) {
      case "W":
        scoreTournament += 2000;
        wins += 1;
        break;
      case "F":
        scoreTournament += 1200;
        break;
      case "SF":
        scoreTournament += 720;
        break;
    }
  }
  let totalPoints = scoreTournament + startingPoints;
  console.log("Final points: " + totalPoints);
  let averageTournamentPoints = scoreTournament / qtyTournaments;
  console.log("Average points: " + Math.floor(averageTournamentPoints));
  console.log(((wins / qtyTournaments) * 100).toFixed(2) + "%");
}
