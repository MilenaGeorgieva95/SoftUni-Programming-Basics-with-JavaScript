function salaryExam(input) {
  let tabsQty = Number(input[0]);
  let salary = Number(input[1]);
  for (let i = 2; i <= tabsQty + 2; i++) {
    let tabName = input[i];
    switch (tabName) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
  }

  if (!(salary <= 0)) {
    console.log(Math.round(salary));
  } else {
    console.log("You have lost your salary.");
  }
}
