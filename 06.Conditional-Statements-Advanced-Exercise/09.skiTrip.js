function skiTrip(input) {
  let days = Number(input[0]);
  let spaceType = input[1];
  let comment = input[2];

  let nights = days - 1;
  let totalPrice = 0;

  switch (spaceType) {
    case "room for one person":
      totalPrice = nights * 18;
      break;
    case "apartment":
      if (nights < 10) {
        totalPrice = nights * 25 * 0.7;
      } else if (nights < 15) {
        totalPrice = nights * 25 * 0.65;
      } else {
        totalPrice = nights * 25 * 0.5;
      }

      break;
    case "president apartment":
      if (nights < 10) {
        totalPrice = nights * 35 * 0.9;
      } else if (nights < 15) {
        totalPrice = nights * 35 * 0.85;
      } else {
        totalPrice = nights * 35 * 0.8;
      }

      break;
  }

  if (comment === "positive") {
    totalPrice *= 1.25;
  } else {
    totalPrice *= 0.9;
  }
  console.log(totalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
