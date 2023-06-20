function coffeeMachine(input) {
  let index = 0;
  let drink = input[index];
  index++;
  let sugar = input[index];
  index++;
  let drinksCount = Number(input[index]);
  index++;
  let drinkPrice = 0;
  let isNoSugar = false;

  switch (drink) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          drinkPrice = 0.9;
          isNoSugar = true;
          break;
        case "Normal":
          drinkPrice = 1;
          break;
        case "Extra":
          drinkPrice = 1.2;
          break;
      }

      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          isNoSugar = true;
          drinkPrice = 1;
          break;
        case "Normal":
          drinkPrice = 1.2;
          break;
        case "Extra":
          drinkPrice = 1.6;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          drinkPrice = 0.5;
          isNoSugar = true;
          break;
        case "Normal":
          drinkPrice = 0.6;
          break;
        case "Extra":
          drinkPrice = 0.7;
          break;
      }
      break;
  }

  totalPrice = drinksCount * drinkPrice;
  if (isNoSugar) {
    totalPrice *= 0.65;
  }
  if (drink === "Espresso" && drinksCount >= 5) {
    totalPrice *= 0.75;
  }
  if (totalPrice > 15) {
    totalPrice *= 0.8;
  }
  console.log(
    `You bought ${drinksCount} cups of ${drink} for ${totalPrice.toFixed(
      2
    )} lv.`
  );
}
