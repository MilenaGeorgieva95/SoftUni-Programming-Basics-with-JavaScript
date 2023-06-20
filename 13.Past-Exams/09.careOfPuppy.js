function careOfPuppy(input) {
  let availableFood = Number(input[0]) * 1000;
  let eatenFood = 0;

  for (let i = 1; i < input.length; i++) {
    let log = input[i];
    if (log !== "Adopted") {
      eatenFood += Number(input[i]);
    }
  }
  if (eatenFood <= availableFood) {
    console.log(
      `Food is enough! Leftovers: ${availableFood - eatenFood} grams.`
    );
  } else {
    console.log(
      `Food is not enough. You need ${eatenFood - availableFood} grams more.`
    );
  }
}
