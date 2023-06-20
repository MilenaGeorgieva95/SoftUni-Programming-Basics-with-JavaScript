function cleverLily(input) {
  let age = Number(input[0]);
  let washing = Number(input[1]);
  let toyPrice = Number(input[2]);
  let toyQty = 0;
  let budget = 0;
  let sum = 0;
  let totalMoney = 0;

  for (let i = 1; i <= age; i += 2) {
    toyQty++;
  }
  for (let i = 2; i <= age; i += 2) {
    sum += 10;
    totalMoney += sum - 1;
  }

  budget = toyPrice * toyQty + totalMoney;

  if (budget >= washing) {
    console.log("Yes! " + (budget - washing).toFixed(2));
  } else {
    console.log("No! " + (washing - budget).toFixed(2));
  }
}
