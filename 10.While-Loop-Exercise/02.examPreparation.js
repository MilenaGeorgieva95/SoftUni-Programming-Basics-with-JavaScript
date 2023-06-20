function examPreparation(input) {
  let index = 0;
  let qtyLowGradesPermitted = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let badGradeCount = 0;
  let neadsBreak = false;
  let totalGrades = 0;
  let gradesCount = 0;
  let taskName = "";

  while (command !== "Enough") {
    taskName = command;
    let currGrade = Number(input[index]);
    index++;
    totalGrades += currGrade;
    gradesCount++;

    if (currGrade <= 4) {
      badGradeCount++;
    }
    if (badGradeCount === qtyLowGradesPermitted) {
      neadsBreak = true;
      break;
    }

    command = input[index];
    index++;
  }

  let averageScore = totalGrades / gradesCount;

  if (neadsBreak) {
    console.log(`You need a break, ${badGradeCount} poor grades.`);
  } else {
    console.log("Average score: " + averageScore.toFixed(2));
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${taskName}`);
  }
}
