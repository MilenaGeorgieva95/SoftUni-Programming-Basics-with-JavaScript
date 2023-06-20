function sumPrimeNonPrime(input) {
  let sumPrime = 0;
  let sumNonPrime = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "stop") {
    currNum = Number(command);
    command = input[index];
    index++;

    if (currNum < 0) {
      console.log("Number is negative.");
      continue;
    }

    let isPrime = true;

    for (i = 2; i < currNum; i++) {
      if (currNum % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      sumPrime += currNum;
    } else {
      sumNonPrime += currNum;
    }
  }

  console.log("Sum of all prime numbers is: " + sumPrime);
  console.log("Sum of all non prime numbers is: " + sumNonPrime);
}
