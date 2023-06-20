function foodDelivery(input) {
  let chicken = Number(input[0]) * 10.35;
  let fish = Number(input[1]) * 12.4;
  let veg = Number(input[2]) * 8.15;
  let totalMainCourse = chicken + fish + veg;

  let desert = totalMainCourse * 0.2;

  let totalToPay = totalMainCourse + desert + 2.5;

  console.log(totalToPay);
}

foodDelivery(["9", "2", "6"]);
