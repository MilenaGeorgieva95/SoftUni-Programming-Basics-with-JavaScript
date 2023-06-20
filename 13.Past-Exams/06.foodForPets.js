function foodForPets(input) {
  let daysCount = Number(input[0]);
  let totalFood = Number(input[1]);
  let dogTotal = 0;
  let catTotal = 0;
  let totalBiscuits = 0;
  let dog = 0;
  let cat = 0;

  for (let i = 2; i < daysCount * 2 + 2; i++) {
    if (i % 2 === 0) {
      dog = Number(input[i]);
      dogTotal += dog;
      if (i % 6 === 0) {
        totalBiscuits += dog * 0.1;
      }
    } else {
      cat = Number(input[i]);
      catTotal += cat;
      if ((i - 1) % 6 === 0) {
        totalBiscuits += cat * 0.1;
      }
    }
  }
  let catDogTotal = dogTotal + catTotal;
  console.log("Total eaten biscuits: " + Math.round(totalBiscuits) + "gr.");
  console.log(
    ((catDogTotal / totalFood) * 100).toFixed(2) +
      "% of the food has been eaten."
  );
  console.log(
    ((dogTotal / catDogTotal) * 100).toFixed(2) + "% eaten from the dog."
  );
  console.log(
    ((catTotal / catDogTotal) * 100).toFixed(2) + "% eaten from the cat."
  );
}
