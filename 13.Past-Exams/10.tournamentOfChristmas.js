function tournamentOfChristmas(input) {
  let daysCount = Number(input[0]);
  let totalMoney = 0;
  let win = 0;
  let lose = 0;
  let totalWin = 0;
  let totalLose = 0;

  for (let i = 1; i < input.length + 1; i++) {
    let log = input[i];
    if (log === "Finish") {
      if (win > lose) {
        totalMoney += win * 20 * 1.1;
      } else {
        totalMoney += win * 20;
      }

      win = 0;
      lose = 0;
    } else if (log === "win") {
      win += 1;
      totalWin += 1;
    } else if (log === "lose") {
      lose += 1;
      totalLose += 1;
    }
  }
  if (totalWin > totalLose) {
    totalMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}
