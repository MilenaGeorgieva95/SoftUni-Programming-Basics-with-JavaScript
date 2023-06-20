function oldBooks(input) {
  index = 0;
  let favBook = input[index];
  index++;
  let command = input[index];
  index++;
  let isFound = false;
  let bookCounter = 0;

  while (command !== "No More Books") {
    if (command === favBook) {
      isFound = true;
      break;
    }
    bookCounter++;
    command = input[index];
    index++;
  }

  if (isFound) {
    console.log(`You checked ${bookCounter} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${bookCounter} books.`);
  }
}
