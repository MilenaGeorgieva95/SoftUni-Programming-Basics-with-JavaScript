function easterBakery(input) {
  let flourPrice = Number(input[0]);
  let flourKg = Number(input[1]);
  let sugarKg = Number(input[2]);
  let eggCartons = Number(input[3]);
  let yeastPerItem = Number(input[4]);

  let flourTotalPrice = flourPrice * flourKg;
  let sugarPrice = (flourPrice * 75) / 100;
  let sugarTotalPrice = sugarPrice * sugarKg;
  let eggsPrice = flourPrice * 1.1;
  let eggsTotalPrice = eggCartons * eggsPrice;
  let yeastTotalPrice = (yeastPerItem * sugarPrice * 20) / 100;

  let total =
    flourTotalPrice + sugarTotalPrice + eggsTotalPrice + yeastTotalPrice;

  console.log(total.toFixed(2));
}
