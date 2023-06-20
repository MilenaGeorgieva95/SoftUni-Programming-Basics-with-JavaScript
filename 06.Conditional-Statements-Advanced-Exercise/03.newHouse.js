function newHouse(input) {
  let flowers = input[0];
  let qty = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;

  switch (flowers) {
    case "Roses":
      if (qty > 80) {
        price = qty * 5 * 0.9;
      } else {
        price = qty * 5;
      }
      break;
    case "Dahlias":
      if (qty > 90) {
        price = qty * 3.8 * 0.85;
      } else {
        price = qty * 3.8;
      }
      break;
    case "Tulips":
      if (qty > 80) {
        price = qty * 2.8 * 0.85;
      } else {
        price = qty * 2.8;
      }
      break;
    case "Narcissus":
      if (qty < 120) {
        price = qty * 3 * 1.15;
      } else {
        price = qty * 3;
      }
      break;
    case "Gladiolus":
      if (qty < 80) {
        price = qty * 2.5 * 1.2;
      } else {
        price = qty * 2.5;
      }
      break;
  }

  if (price <= budget) {
    console.log(
      `Hey, you have a great garden with ${qty} ${flowers} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}

newHouse(["Roses", "55", "250"]);
