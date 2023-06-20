function onTimeForTheExam(input) {
  let examH = Number(input[0]);
  let examM = Number(input[1]);
  let studentH = Number(input[2]);
  let studentM = Number(input[3]);

  let studentTotalMins = studentH * 60 + studentM;
  let examTotalMins = examH * 60 + examM;

  if (studentTotalMins < examTotalMins - 30) {
    console.log("Early");
  } else if (
    studentTotalMins >= examTotalMins - 30 &&
    studentTotalMins <= examTotalMins
  ) {
    console.log("On time");
  } else {
    console.log("Late");
  }

  if (examTotalMins > studentTotalMins) {
    let difference = examTotalMins - studentTotalMins;
    if (difference <= 59) {
      console.log(difference + " minutes before the start");
    } else {
      let difH = Math.floor(difference / 60);
      let difM = difference % 60;
      if (difM < 10) {
        console.log(`${difH}:0${difM} hours before the start`);
      } else {
        console.log(`${difH}:${difM} hours before the start`);
      }
    }
  }

  if (examTotalMins < studentTotalMins) {
    let difference = studentTotalMins - examTotalMins;
    if (difference <= 59) {
      console.log(difference + " minutes after the start");
    } else {
      let difH = Math.floor(difference / 60);
      let difM = difference % 60;
      if (difM < 10) {
        console.log(`${difH}:0${difM} hours after the start`);
      } else {
        console.log(`${difH}:${difM} hours after the start`);
      }
    }
  }
}

onTimeForTheExam(["14", "00", "13", "55"]);
