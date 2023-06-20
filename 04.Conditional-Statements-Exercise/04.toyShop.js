function toyShop(input) {
  let holliday = Number(input[0]);
  let puzel = Number(input[1]);
  let doll = Number(input[2]);
  let bear = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]);

  let totalCountItems = puzel + doll + bear + minion + truck;

  let puzelPrice = puzel * 2.6;
  let dollPrice = doll * 3;
  let bearPrice = bear * 4.1;
  let minionPrice = minion * 8.2;
  let truckPrice = truck * 2;

  let totalPrice =
    puzelPrice + dollPrice + bearPrice + minionPrice + truckPrice;

  if (totalCountItems >= 50) {
    totalPrice = totalPrice * 0.75;
  }

  let rent = totalPrice * 0.1;
  let moneyEarned = totalPrice - rent;

  if (moneyEarned >= holliday) {
    console.log(`Yes! ${(moneyEarned - holliday).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(holliday - moneyEarned).toFixed(2)} lv needed.`
    );
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
