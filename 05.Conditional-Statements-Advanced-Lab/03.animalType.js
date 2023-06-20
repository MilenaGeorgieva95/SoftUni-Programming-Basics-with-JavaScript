function animalType(input) {
  let day = input[0];

  switch (day) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;

    default:
      console.log("unknown");
  }
}

animalType(["snake"]);
