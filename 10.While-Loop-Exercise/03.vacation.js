function vacation(input) {
  let index = 0;
  let vacationPrice = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let spendCount = 0;
  let cantSave = false;
  let daysCount = 0;

  while (money < vacationPrice) {
    let command = input[index];
    index++;
    let currMoney = Number(input[index]);
    index++;
    daysCount++;

    switch (command) {
      case "save":
        money += currMoney;
        spendCount = 0;

        break;
      case "spend":
        spendCount++;
        if (spendCount === 5) {
          cantSave = true;
        }
        money -= currMoney;
        if (money < 0) {
          money = 0;
        }

        break;
    }
    if (cantSave) {
      break;
    }
  }
  if (cantSave) {
    console.log(`You can't save the money.`);
    console.log(daysCount);
  } else {
    console.log(`You saved the money for ${daysCount} days.`);
  }
}
