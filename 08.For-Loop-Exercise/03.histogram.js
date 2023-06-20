function histogram(input) {
  let num = 0;
  let qty = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= qty; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      p1 += 1;
    } else if (num < 400) {
      p2 += 1;
    } else if (num < 600) {
      p3 += 1;
    } else if (num < 800) {
      p4 += 1;
    } else {
      p5 += 1;
    }
  }
  console.log(((p1 / qty) * 100).toFixed(2) + "%");
  console.log(((p2 / qty) * 100).toFixed(2) + "%");
  console.log(((p3 / qty) * 100).toFixed(2) + "%");
  console.log(((p4 / qty) * 100).toFixed(2) + "%");
  console.log(((p5 / qty) * 100).toFixed(2) + "%");
}
