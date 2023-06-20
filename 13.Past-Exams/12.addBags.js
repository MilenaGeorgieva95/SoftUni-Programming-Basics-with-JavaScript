function addBags(input) {
  let luggage = Number(input[0]);
  let luggageKg = Number(input[1]);
  let days = Number(input[2]);
  let luggageCount = Number(input[3]);

  let pricePerLuggage = 0;

  if (luggageKg < 10) {
    pricePerLuggage = 0.2 * luggage;
  } else if (luggageKg <= 20) {
    pricePerLuggage = 0.5 * luggage;
  } else {
    pricePerLuggage = luggage;
  }

  if (days < 7) {
    pricePerLuggage *= 1.4;
  } else if (days <= 30) {
    pricePerLuggage *= 1.15;
  } else {
    pricePerLuggage *= 1.1;
  }

  let totalPrice = pricePerLuggage * luggageCount;
  console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
