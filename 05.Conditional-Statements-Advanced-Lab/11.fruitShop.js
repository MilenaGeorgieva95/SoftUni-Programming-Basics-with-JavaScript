function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let qty = Number(input[2]);
  let money = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          money = qty * 2.5;
          break;
        case "apple":
          money = qty * 1.2;
          break;
        case "orange":
          money = qty * 0.85;
          break;
        case "grapefruit":
          money = qty * 1.45;
          break;
        case "kiwi":
          money = qty * 2.7;
          break;
        case "pineapple":
          money = qty * 5.5;
          break;
        case "grapes":
          money = qty * 3.85;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          money = qty * 2.7;
          break;
        case "apple":
          money = qty * 1.25;
          break;
        case "orange":
          money = qty * 0.9;
          break;
        case "grapefruit":
          money = qty * 1.6;
          break;
        case "kiwi":
          money = qty * 3.0;
          break;
        case "pineapple":
          money = qty * 5.6;
          break;
        case "grapes":
          money = qty * 4.2;
          break;
        default:
          console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
  if (money !== 0) {
    console.log(money.toFixed(2));
  }
}

fruitShop(["pineapple", "Sunday", "1.65"]);
