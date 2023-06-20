function vetParking(input) {
  let daysCount = Number(input[0]);
  let hoursCount = Number(input[1]);
  let totalToPay = 0;

  for (let day = 1; day <= daysCount; day++) {
    let price = 0;
    if (day % 2 === 0) {
      for (let hour = 1; hour <= hoursCount; hour++) {
        if (hour % 2 !== 0) {
          price += 2.5;
        } else {
          price += 1;
        }
      }
    } else {
      for (let hour = 1; hour <= hoursCount; hour++) {
        if (hour % 2 !== 0) {
          price += 1;
        } else {
          price += 1.25;
        }
      }
    }
    totalToPay += price;
    console.log(`Day: ${day} - ${price.toFixed(2)} leva`);
  }

  console.log(`Total: ${totalToPay.toFixed(2)} leva`);
}
