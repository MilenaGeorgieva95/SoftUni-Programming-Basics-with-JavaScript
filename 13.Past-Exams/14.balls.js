function balls(input) {
  let ballsCount = Number(input[0]);
  let totalPoints = 0;
  let oddBalls = 0;
  let red = 0;
  let orange = 0;
  let yellow = 0;
  let white = 0;
  let black = 0;

  for (let i = 1; i < ballsCount + 1; i++) {
    let ballColor = input[i];
    switch (ballColor) {
      case "red":
        red++;
        totalPoints += 5;
        break;
      case "orange":
        orange++;
        totalPoints += 10;
        break;
      case "yellow":
        yellow++;
        totalPoints += 15;
        break;
      case "white":
        white++;
        totalPoints += 20;
        break;
      case "black":
        black++;
        totalPoints = Math.floor(totalPoints / 2);
        break;
      default:
        oddBalls++;
    }
  }
  console.log("Total points: " + totalPoints);
  console.log("Red balls: " + red);
  console.log("Orange balls: " + orange);
  console.log("Yellow balls: " + yellow);
  console.log("White balls: " + white);
  console.log("Other colors picked: " + oddBalls);
  console.log("Divides from black balls: " + black);
}
