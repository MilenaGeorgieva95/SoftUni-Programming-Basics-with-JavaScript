function vacationBooksList(input) {
  let pages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysTotal = Number(input[2]);

  let hours = pages / pagesPerHour;
  let total = hours / daysTotal;

  console.log(total);
}

vacationBooksList(["432", "15", "4"]);
