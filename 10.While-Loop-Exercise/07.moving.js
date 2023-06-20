function moving(input) {
  let index = 0;
  let w = Number(input[index]);
  index++;
  let l = Number(input[index]);
  index++;
  let h = Number(input[index]);
  index++;

  let freeSpace = w * l * h;

  let command = input[index];
  index++;

  while (command !== "Done") {
    let box = Number(command);

    freeSpace -= box;

    if (freeSpace < 0) {
      break;
    }

    command = input[index];
    index++;
  }

  if (freeSpace >= 0) {
    console.log(`${freeSpace} Cubic meters left.`);
  } else {
    console.log(
      `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
    );
  }
}
