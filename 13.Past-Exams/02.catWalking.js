function catWalking(input) {
  let mins = Number(input[0]);
  let timesPerDay = Number(input[1]);
  let calories = Number(input[2]);

  let totalMins = mins * timesPerDay;
  let caloriesSpent = totalMins * 5;

  if (caloriesSpent >= 0.5 * calories) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesSpent}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesSpent}.`
    );
  }
}
