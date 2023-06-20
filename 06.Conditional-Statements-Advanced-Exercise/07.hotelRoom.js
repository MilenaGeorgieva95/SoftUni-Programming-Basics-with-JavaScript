function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let studio = 0;
  let apartment = 0;

  switch (month) {
    case "May":
    case "October":
      studio = nights * 50;
      apartment = nights * 65;
      if (nights > 7 && nights <= 14) {
        studio *= 0.95;
      } else if (nights > 14) {
        studio *= 0.7;
      }
      break;
    case "June":
    case "September":
      studio = nights * 75.2;
      apartment = nights * 68.7;
      if (nights > 14) {
        studio *= 0.8;
      }
      break;
    case "July":
    case "August":
      studio = nights * 76;
      apartment = nights * 77;
      break;
  }

  if (nights > 14) {
    apartment *= 0.9;
  }

  console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
  console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
