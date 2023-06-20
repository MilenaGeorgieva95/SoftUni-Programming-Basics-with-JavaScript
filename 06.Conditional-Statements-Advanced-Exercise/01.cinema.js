function cinema(input) {
  let typeTicket = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);
  let ticketsCount = rows * cols;
  let ticketsPrice = 0;

  if (typeTicket === "Premiere") {
    ticketsPrice = ticketsCount * 12;
  } else if (typeTicket === "Normal") {
    ticketsPrice = ticketsCount * 7.5;
  } else {
    ticketsPrice = ticketsCount * 5;
  }

  if (ticketsPrice !== 0) {
    console.log(ticketsPrice.toFixed(2) + " leva");
  }
}

cinema(["Discount", "78", "9"]);
