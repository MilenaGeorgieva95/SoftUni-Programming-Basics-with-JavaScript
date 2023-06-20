function tradeCommisions(input) {
  let city = input[0];
  let volume = Number(input[1]);
  let commision = 0;

  switch (city) {
    case "Sofia":
      if (volume < 0) {
        console.log("error");
      } else if (volume >= 0 && volume <= 500) {
        commision = volume * 0.05;
      } else if (volume <= 1000) {
        commision = volume * 0.07;
      } else if (volume <= 10000) {
        commision = volume * 0.08;
      } else {
        commision = volume * 0.12;
      }
      break;
    case "Varna":
      if (volume < 0) {
        console.log("error");
      } else if (volume >= 0 && volume <= 500) {
        commision = volume * 0.045;
      } else if (volume <= 1000) {
        commision = volume * 0.075;
      } else if (volume <= 10000) {
        commision = volume * 0.1;
      } else {
        commision = volume * 0.13;
      }
      break;
    case "Plovdiv":
      if (volume < 0) {
        console.log("error");
      } else if (volume >= 0 && volume <= 500) {
        commision = volume * 0.055;
      } else if (volume <= 1000) {
        commision = volume * 0.08;
      } else if (volume <= 10000) {
        commision = volume * 0.12;
      } else {
        commision = volume * 0.145;
      }
      break;
    default:
      console.log("error");
      break;
  }

  if (commision !== 0) {
    console.log(commision.toFixed(2));
  }
}

tradeCommisions(["Plovdiv", "10000.01"]);
