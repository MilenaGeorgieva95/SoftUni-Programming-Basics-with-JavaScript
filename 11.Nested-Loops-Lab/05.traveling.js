function traveling(input) {
  index = 0;
  let command = input[index];
  index++;

  while (command !== "End") {
    let destination = command;
    let budget = Number(input[index]);
    index++;
    let currentMoney = 0;

    while (currentMoney < budget) {
      money = Number(input[index]);
      index++;
      currentMoney += money;
    }
    console.log(`Going to ${destination}!`);
    command = input[index];
    index++;
  }
}
