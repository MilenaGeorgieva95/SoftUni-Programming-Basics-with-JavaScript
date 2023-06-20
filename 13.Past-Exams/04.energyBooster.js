function energyBooster(input) {
  let fruit = input[0];
  let size = input[1];
  let gelCount = Number(input[2]);
  let priceForBig = 0;
  let priceForSmall = 0;
  let totalPrice = 0;

  if (size === "small") {
    switch (fruit) {
      case "Watermelon":
        priceForSmall = 56 * 2;
        break;
      case "Mango":
        priceForSmall = 36.66 * 2;
        break;
      case "Pineapple":
        priceForSmall = 42.1 * 2;
        break;
      case "Raspberry":
        priceForSmall = 20 * 2;
        break;
    }
    totalPrice = priceForSmall * gelCount;
  } else {
    switch (fruit) {
      case "Watermelon":
        priceForBig = 28.7 * 5;
        break;
      case "Mango":
        priceForBig = 19.6 * 5;
        break;
      case "Pineapple":
        priceForBig = 24.8 * 5;
        break;
      case "Raspberry":
        priceForBig = 15.2 * 5;
        break;
    }
    totalPrice = priceForBig * gelCount;
  }

  if (totalPrice < 400) {
  } else if (totalPrice <= 1000) {
    totalPrice = totalPrice * 0.85;
  } else {
    totalPrice = totalPrice * 0.5;
  }
  console.log(`${totalPrice.toFixed(2)} lv.`);
}
