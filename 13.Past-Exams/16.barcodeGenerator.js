function barcodeGenerator(input) {
  let start = input[0];
  let end = input[1];

  let start1 = Number(start[0]);
  let start2 = Number(start[1]);
  let start3 = Number(start[2]);
  let start4 = Number(start[3]);
  let end1 = Number(end[0]);
  let end2 = Number(end[1]);
  let end3 = Number(end[2]);
  let end4 = Number(end[3]);

  let print = "";

  for (let i = start1; i <= end1; i++) {
    if (i % 2 == 1) {
      for (let j = start2; j <= end2; j++) {
        if (j % 2 == 1) {
          for (let k = start3; k <= end3; k++) {
            if (k % 2 == 1) {
              for (let l = start4; l <= end4; l++) {
                if (l % 2 == 1) {
                  print += `${i}${j}${k}${l} `;
                }
              }
            }
          }
        }
      }
    }
  }

  console.log(print);
}
