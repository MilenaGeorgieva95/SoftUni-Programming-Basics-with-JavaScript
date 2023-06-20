function petShop(input) {
  let dogCount = Number(input[0]);
  let catsCount = Number(input[1]);
  let dogsTotalPrice = dogCount * 2.5;
  let catsTotalPrice = catsCount * 4;
  let total = dogsTotalPrice + catsTotalPrice;

  console.log(`${total} lv.`);
}

petShop(["13", "9"]);
