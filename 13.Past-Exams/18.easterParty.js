function easterParty(input) {
  let guestsCount = Number(input[0]);
  let bookingPricePerPerson = Number(input[1]);
  let budget = Number(input[2]);

  if (guestsCount < 10) {
  } else if (guestsCount <= 15) {
    bookingPricePerPerson *= 0.85;
  } else if (guestsCount <= 20) {
    bookingPricePerPerson *= 0.8;
  } else {
    bookingPricePerPerson *= 0.75;
  }

  let totalGuestPrice = guestsCount * bookingPricePerPerson;
  let cakePrice = budget * 0.1;
  let totalPrice = totalGuestPrice + cakePrice;

  if (totalPrice <= budget) {
    console.log(
      `It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`
    );
  } else {
    console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
  }
}
