function passwordTask(input) {
  let name = input[0];
  let password = input[1];
  ("Pass");
  let index = 2;
  let data = input[index];
  index++;

  while (data !== password) {
    data = input[index];
    index++;
  }

  console.log(`Welcome ${name}!`);
}
