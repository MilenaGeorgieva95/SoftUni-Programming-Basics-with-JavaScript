function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let price = 0;
  let destination = "";
  let placeType = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        placeType = "Camp";
        price = 0.3 * budget;
        break;
      case "winter":
        placeType = "Hotel";
        price = 0.7 * budget;
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        placeType = "Camp";
        price = 0.4 * budget;
        break;
      case "winter":
        placeType = "Hotel";
        price = 0.8 * budget;
        break;
    }
  } else {
    destination = "Europe";
    placeType = "Hotel";
    price = budget * 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeType} - ${price.toFixed(2)}`);
}

journey(["50", "summer"]);
