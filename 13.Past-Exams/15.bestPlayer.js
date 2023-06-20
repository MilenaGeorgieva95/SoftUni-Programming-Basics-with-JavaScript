function bestPlayer(input) {
  let name = "";
  let endScore = 0;
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    let log = input[i];

    if (log === "END") {
      console.log(`${name} is the best player!`);

      if (endScore >= 3) {
        console.log(`He has scored ${endScore} goals and made a hat-trick !!!`);
      } else {
        console.log(`He has scored ${endScore} goals.`);
      }
    } else if (Number.isInteger(Number(log))) {
      score = Number(log);
      if (endScore < score) {
        endScore = score;
        name = input[i - 1];

        if (endScore >= 10) {
          console.log(`${name} is the best player!`);
          console.log(
            `He has scored ${endScore} goals and made a hat-trick !!!`
          );
          return;
        }
      }
    }
  }
}
