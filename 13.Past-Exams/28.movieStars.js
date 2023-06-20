function movieStars(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  while (command !== "ACTION") {
    let salary = 0;
    let name = command;
    if (name.length <= 15) {
      salary = Number(input[index]);
      index++;
    } else {
      salary = budget * 0.2;
    }

    if (budget < 0) {
      break;
    }
    budget -= salary;
    command = input[index];
    index++;
  }

  if (budget < 0) {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  } else {
    console.log(`We are left with ${Math.abs(budget).toFixed(2)} leva.`);
  }
}
