function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let sandPercentage = Number(input[3]) / 100;

  let tankVolume = (length * width * height) / 1000;
  let sandVolume = tankVolume * sandPercentage;
  let totalFreeVolume = tankVolume - sandVolume;

  console.log(totalFreeVolume);
}

fishTank(["105", "77", "89", "18.5"]);
