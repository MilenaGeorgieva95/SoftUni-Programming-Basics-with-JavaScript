function suppliesForSchool(input) {
  let pen = Number(input[0]) * 5.8;
  let markerpen = Number(input[1]) * 7.2;
  let cleaningSolution = Number(input[2]) * 1.2;
  let totalSum = pen + markerpen + cleaningSolution;

  let discount = Number(input[3]) / 100;

  let totalDiscount = discount * totalSum;
  let total = totalSum - totalDiscount;
  console.log(total);
}

suppliesForSchool(["4", "2", "5", "13"]);
