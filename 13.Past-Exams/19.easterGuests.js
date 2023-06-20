function easterGuests(input) {
  let guestCount = Number(input[0]);
  let budget = Number(input[1]);

  let breadPricePerItem = 400;
  let eggsPricePerItem = 45;

  let breadTotalPrice = Math.ceil(guestCount / 3) * breadPricePerItem;
  let eggsTotalPrice = guestCount * 2 * eggsPricePerItem;

  let totalPrice = (breadTotalPrice + eggsTotalPrice) / 100;

  if (budget >= totalPrice) {
    console.log(
      `Lyubo bought ${Math.ceil(guestCount / 3)} Easter bread and ${
        guestCount * 2
      } eggs.`
    );
    console.log(`He has ${(budget - totalPrice).toFixed(2)} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${(totalPrice - budget).toFixed(2)} lv. more.`);
  }
}
