function projectsCreation(input) {
  let name = input[0];
  let projectsCount = Number(input[1]);
  let hours = projectsCount * 3;

  console.log(
    `The architect ${name} will need ${hours} hours to complete ${projectsCount} project/s.`
  );
}

projectsCreation(["George", "4"]);
