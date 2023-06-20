function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let studentTickets = 0;
  let kidsTickets = 0;
  let standardTickets = 0;

  while (command !== "Finish") {
    let movieName = command;
    let placeAvailable = Number(input[index]);
    index++;
    let command1 = input[index];
    index++;
    let placesTaken = 0;

    while (command1 !== "End") {
      let ticketType = command1;
      placesTaken++;

      if (ticketType === "student") {
        studentTickets++;
      } else if (ticketType === "standard") {
        standardTickets++;
      } else if (ticketType === "kid") {
        kidsTickets++;
      }

      if (placesTaken === placeAvailable) {
        break;
      }
      command1 = input[index];
      index++;
    }

    let percentTaken = (placesTaken / placeAvailable) * 100;
    console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }

  let totalTickets = standardTickets + kidsTickets + studentTickets;
  console.log(`Total tickets: ${totalTickets}`);

  let studentTicketPercent = (studentTickets / totalTickets) * 100;
  console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);

  let standTicketPercent = (standardTickets / totalTickets) * 100;
  console.log(`${standTicketPercent.toFixed(2)}% standard tickets.`);

  let kidsTicketPercent = (kidsTickets / totalTickets) * 100;
  console.log(`${kidsTicketPercent.toFixed(2)}% kids tickets.`);
}
