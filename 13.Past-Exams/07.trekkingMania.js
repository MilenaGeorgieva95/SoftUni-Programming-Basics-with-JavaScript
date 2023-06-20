function trekkingMania(input) {
  let groupsCount = Number(input[0]);
  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;
  let totalPeople = 0;

  for (let i = 1; i < groupsCount + 1; i++) {
    let peopleCount = Number(input[i]);
    totalPeople += peopleCount;
    if (peopleCount <= 5) {
      musala += peopleCount;
    } else if (peopleCount <= 12) {
      monblan += peopleCount;
    } else if (peopleCount <= 25) {
      kilimandjaro += peopleCount;
    } else if (peopleCount <= 40) {
      k2 += peopleCount;
    } else {
      everest += peopleCount;
    }
  }

  console.log(((musala / totalPeople) * 100).toFixed(2) + "%");
  console.log(((monblan / totalPeople) * 100).toFixed(2) + "%");
  console.log(((kilimandjaro / totalPeople) * 100).toFixed(2) + "%");
  console.log(((k2 / totalPeople) * 100).toFixed(2) + "%");
  console.log(((everest / totalPeople) * 100).toFixed(2) + "%");
}
