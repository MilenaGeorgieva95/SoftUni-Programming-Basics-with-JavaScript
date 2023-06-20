function suitcasesLoad(input) {
  let planeVolume = Number(input[0]);
  let totalLoaded = 0;
  let totalCount = 0;

  for (let i = 1; i < input.length; i++) {
    let luggageVolume = input[i];

    if (luggageVolume !== "End") {
      loaded = Number(luggageVolume);

      if (i % 3 === 0) {
        loaded += 0.1 * loaded;
      }

      totalLoaded += loaded;

      if (totalLoaded <= planeVolume) {
        totalCount++;
      } else {
        console.log("No more space!");
      }
    } else {
      console.log("Congratulations! All suitcases are loaded!");
    }
  }
  console.log(`Statistic: ${totalCount} suitcases loaded.`);
}
