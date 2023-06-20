function easterTrip(input) {
  let destination = input[0];
  let dates = input[1];
  let nightsCount = Number(input[2]);
  let nightPrice = 0;

  switch (destination) {
    case "France":
      switch (dates) {
        case "21-23":
          nightPrice = 30;
          break;
        case "24-27":
          nightPrice = 35;
          break;
        case "28-31":
          nightPrice = 40;
          break;
      }
      break;
    case "Italy":
      switch (dates) {
        case "21-23":
          nightPrice = 28;
          break;
        case "24-27":
          nightPrice = 32;
          break;
        case "28-31":
          nightPrice = 39;
          break;
      }
      break;
    case "Germany":
      switch (dates) {
        case "21-23":
          nightPrice = 32;
          break;
        case "24-27":
          nightPrice = 37;
          break;
        case "28-31":
          nightPrice = 43;
          break;
      }
      break;
  }

  let totalPrice = nightPrice * nightsCount;

  console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}
