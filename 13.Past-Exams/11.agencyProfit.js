function agencyProfit(input) {
  let name = input[0];
  let tax = Number(input[4]);
  let adultCount = Number(input[1]);
  let kidsCount = Number(input[2]);
  let adultPrice = Number(input[3]);
  let pricePerAdult = adultPrice + tax;
  let pricePerKid = adultPrice * 0.3 + tax;

  let total = adultCount * pricePerAdult + kidsCount * pricePerKid;
  let totalProfit = total * 0.2;

  console.log(
    `The profit of your agency from ${name} tickets is ${totalProfit.toFixed(
      2
    )} lv.`
  );
}
