function personalTitles(input) {
  let age = Number(input[0]);
  let sex = input[1];

  if (age < 16 && sex == "m") {
    day = "Master";
  } else if (age >= 16 && sex == "m") {
    day = "Mr.";
  } else if (age < 16 && sex == "f") {
    day = "Miss";
  } else {
    day = "Ms.";
  }
  console.log(day);
}

personalTitles(["15.9", "f"]);
