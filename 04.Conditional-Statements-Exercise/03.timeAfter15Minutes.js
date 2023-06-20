function timeAfter15Minutes(input) {
  let hour = Number(input[0]);
  let mins = Number(input[1]);

  let totalMins = hour * 60 + mins + 15;
  let hoursToPrint = Math.floor(totalMins / 60);
  let minsToPrint = totalMins % 60;

  if (hoursToPrint === 24) {
    hoursToPrint = 0;
  }

  if (minsToPrint < 10) {
    console.log(`${hoursToPrint}:0${minsToPrint}`);
  } else {
    console.log(`${hoursToPrint}:${minsToPrint}`);
  }
}

timeAfter15Minutes(["12", "46"]);
