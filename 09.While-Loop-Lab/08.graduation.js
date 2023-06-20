function graduation(input) {
  let name = input[0];
  let index = 0;
  index++;
  let averageGrade = 0;
  let i = 1;
  let badGradeCounter = 0;
  let isExcluded = false;

  while (i <= 12) {
    let grade = Number(input[index]);
    index++;

    if (grade < 4.0) {
      badGradeCounter++;
      if (badGradeCounter > 1) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${i} grade`);
        break;
      }
      continue;
    }
    averageGrade += grade;
    i++;
  }
  if (!isExcluded) {
    console.log(
      `${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`
    );
  }
}
