function walking(input) {
  let goal = 10000;
  let index = 0;
  let command = input[index];
  let totalSteps = 0;
  let isGoalReached = false;

  while (command !== "Going home") {
    let currentSteps = Number(input[index]);
    index++;
    command = input[index];

    if (totalSteps < goal) {
      totalSteps += currentSteps;
    } else {
      isGoalReached = true;
      break;
    }
  }

  if (isGoalReached) {
    console.log(`Goal reached! Good job!`);
    console.log(`${totalSteps - goal} steps over the goal!`);
  } else {
    index++;
    let total = totalSteps + Number(input[index]);
    if (total >= goal) {
      console.log(`Goal reached! Good job!`);
      console.log(`${total - goal} steps over the goal!`);
    } else {
      console.log(`${goal - total} more steps to reach goal.`);
    }
  }
}
