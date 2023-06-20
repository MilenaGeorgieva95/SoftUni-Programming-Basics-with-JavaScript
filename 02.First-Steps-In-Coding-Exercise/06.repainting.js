function repainting(input) {
  let plastic = (Number(input[0]) + 2) * 1.5;
  let paint = Number(input[1]) * 14.5;
  let paintmaterialsTotal = paint * 1.1;
  let thinner = Number(input[2]) * 5;
  let materialsTotal = plastic + paintmaterialsTotal + thinner + 0.4;

  let hours = Number(input[3]);
  let workers = hours * (materialsTotal * 0.3);

  let totalSum = materialsTotal + workers;

  console.log(totalSum);
}

repainting(["5", "10", "10", "1"]);
