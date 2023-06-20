function depositCalculator(input) {
  let deposit = Number(input[0]);
  let months = Number(input[1]);
  let interest = Number(input[2]) / 100;
  let total = deposit + months * ((deposit * interest) / 12);
  console.log(total);
}

depositCalculator(["2700", "12", "38.5"]);
