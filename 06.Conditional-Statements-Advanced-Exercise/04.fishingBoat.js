function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let qty = Number(input[2]);
  let price = 0;

  switch (season) {
    case "Spring":
      if (qty <= 6) {
        price = 3000 * 0.9;
      } else if (qty <= 11) {
        price = 3000 * 0.85;
      } else {
        price = 3000 * 0.75;
      }
      break;
    case "Summer":
      if (qty <= 6) {
        price = 4200 * 0.9;
      } else if (qty <= 11) {
        price = 4200 * 0.85;
      } else {
        price = 4200 * 0.75;
      }
      break;
    case "Autumn":
      if (qty <= 6) {
        price = 4200 * 0.9;
      } else if (qty <= 11) {
        price = 4200 * 0.85;
      } else {
        price = 4200 * 0.75;
      }
      break;
    case "Winter":
      if (qty <= 6) {
        price = 2600 * 0.9;
      } else if (qty <= 11) {
        price = 2600 * 0.85;
      } else {
        price = 2600 * 0.75;
      }
      break;
  }
  if (season !== "Autumn" && qty % 2 === 0) {
    price *= 0.95;
  }

  if (price <= budget) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(price - budget).toFixed(2)} leva.`
    );
  }
}

fishingBoat(["3000", "Summer", "11"]);
