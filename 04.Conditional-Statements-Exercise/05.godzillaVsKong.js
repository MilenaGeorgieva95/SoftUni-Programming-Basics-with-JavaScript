function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let pplCount = Number(input[1]);
  let clothes = Number(input[2]);

  let decor = 0.1 * budget;
  let totalClothes = pplCount * clothes;

  if (pplCount > 150) {
    totalClothes = 0.9 * totalClothes;
  }

  let totalSpent = decor + totalClothes;

  if (budget >= totalSpent) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - totalSpent).toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalSpent - budget).toFixed(2)} leva more.`);
  }
}

godzillaVsKong(["15437.62", "186", "57.99"]);
