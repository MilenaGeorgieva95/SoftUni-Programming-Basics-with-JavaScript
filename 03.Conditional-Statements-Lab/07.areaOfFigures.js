function areaOfFigures(input) {
  let figure = input[0];
  let areaCalculated = 0;
  let sideA = Number(input[1]);

  if (figure === "square") {
    areaCalculated = sideA * sideA;
  } else if (figure === "rectangle") {
    let sideB = Number(input[2]);
    areaCalculated = sideA * sideB;
  } else if (figure === "circle") {
    areaCalculated = Math.PI * Math.pow(sideA, 2);
  } else {
    let h = Number(input[2]);
    areaCalculated = (sideA * h) / 2;
  }

  console.log(areaCalculated.toFixed(3));
}

areaOfFigures(["circle", "8.55"]);
