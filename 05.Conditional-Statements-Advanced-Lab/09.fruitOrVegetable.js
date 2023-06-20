function fruitOrVegetable(input) {
  let day = input[0];

  switch (day) {
    case "grapes":
    case "lemon":
    case "cherry":
    case "apple":
    case "kiwi":
    case "banana":
      console.log("fruit");
      break;
    case "tomato":
    case "carrot":
    case "cucumber":
    case "pepper":
      console.log("vegetable");
      break;

    default:
      console.log("unknown");
  }
}

fruitOrVegetable(["pepper"]);
