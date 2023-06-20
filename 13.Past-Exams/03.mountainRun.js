function mountainRun(input) {
  let recordNow = Number(input[0]);
  let metersToClimb = Number(input[1]);
  let georgisSpeed = Number(input[2]);
  let slowed = Math.floor(metersToClimb / 50) * 30;
  let georgisTime = georgisSpeed * metersToClimb + slowed;

  if (georgisTime < recordNow) {
    console.log(`Yes! The new record is ${georgisTime.toFixed(2)} seconds.`);
  } else {
    console.log(
      `No! He was ${(georgisTime - recordNow).toFixed(2)} seconds slower.`
    );
  }
}
