function evenPowersOf2(input) {
  let num = Number(input[0]);
  for (let i = 0; i <= num; i = i + 2) {
    console.log(2 ** i);
  }
}
