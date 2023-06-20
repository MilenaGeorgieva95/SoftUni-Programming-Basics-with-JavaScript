function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let qty = Number(input[2]);
  let money = 0;

  switch (city) {
    case "Sofia":
      switch (product) {
        case "coffee":
          money = qty * 0.5;
          break;
        case "water":
          money = qty * 0.8;
          break;
        case "beer":
          money = qty * 1.2;
          break;
        case "sweets":
          money = qty * 1.45;
          break;
        case "peanuts":
          money = qty * 1.6;
          break;
      }
      break;

    case "Plovdiv":
      switch (product) {
        case "coffee":
          money = qty * 0.4;
          break;
        case "water":
          money = qty * 0.7;
          break;
        case "beer":
          money = qty * 1.15;
          break;
        case "sweets":
          money = qty * 1.3;
          break;
        case "peanuts":
          money = qty * 1.5;
          break;
      }
      break;

    case "Varna":
      switch (product) {
        case "coffee":
          money = qty * 0.45;
          break;
        case "water":
          money = qty * 0.7;
          break;
        case "beer":
          money = qty * 1.1;
          break;
        case "sweets":
          money = qty * 1.35;
          break;
        case "peanuts":
          money = qty * 1.55;
          break;
      }
      break;
  }
  console.log(money);
}

smallShop(["coffee", "Varna", "2"]);
