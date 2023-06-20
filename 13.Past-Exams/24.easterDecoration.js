function easterDecoration(input) {
  let index = 0;
  let clientsCount = Number(input[index]);
  index++;
  let totalPrice = 0;

  for (let i = 0; i < clientsCount; i++) {
    let command = input[index];
    index++;

    let price = 0;
    let productCount = 0;

    while (command !== "Finish") {
      let product = command;
      command = input[index];
      index++;
      productCount++;

      switch (product) {
        case "basket":
          price += 1.5;
          break;
        case "wreath":
          price += 3.8;
          break;
        case "chocolate bunny":
          price += 7;
          break;
      }
    }

    if (productCount % 2 === 0) {
      price *= 0.8;
    }
    console.log(
      `You purchased ${productCount} items for ${price.toFixed(2)} leva.`
    );
    totalPrice += price;
  }
  console.log(
    `Average bill per client is: ${(totalPrice / clientsCount).toFixed(
      2
    )} leva.`
  );
}
