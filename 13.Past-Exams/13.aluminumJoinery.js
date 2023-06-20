function aluminumJoinery(input) {
  let qty = Number(input[0]);
  let type = input[1];
  let delivery = input[2];
  let pricePerItem = 0;
  let discount = 0;
  let totalPrice = 0;

  if (qty < 10) {
    console.log("Invalid order");
  } else {
    switch (type) {
      case "90X130":
        pricePerItem = 110;
        if (qty > 60) {
          discount = 0.08;
        } else if (qty > 30) {
          discount = 0.05;
        }
        break;
      case "100X150":
        pricePerItem = 140;
        if (qty > 80) {
          discount = 0.1;
        } else if (qty > 40) {
          discount = 0.06;
        }
        break;
      case "130X180":
        pricePerItem = 190;
        if (qty > 50) {
          discount = 0.12;
        } else if (qty > 20) {
          discount = 0.07;
        }
        break;
      case "200X300":
        pricePerItem = 250;
        if (qty > 50) {
          discount = 0.14;
        } else if (qty > 25) {
          discount = 0.09;
        }
        break;
    }
    totalPrice = qty * pricePerItem;
    let totalDiscount = totalPrice * discount;
    totalPrice -= totalDiscount;

    if (delivery === "With delivery") {
      totalPrice += 60;
    }

    if (qty > 99) {
      totalPrice *= 0.96;
    }

    console.log(totalPrice.toFixed(2) + " BGN");
  }
}
