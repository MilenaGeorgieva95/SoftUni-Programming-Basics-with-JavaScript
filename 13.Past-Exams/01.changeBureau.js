function changeBureau(input) {
  let bitcoins = Number(input[0]);
  let uan = Number(input[1]);
  let commission = Number(input[2]);

  let bitcoinsBGN = bitcoins * 1168;
  let uanDollars = uan * 0.15;
  let uanBGN = uanDollars * 1.76;
  let totalBGN = bitcoinsBGN + uanBGN;
  let totalEuro = totalBGN / 1.95;

  let commissionEuro = (totalEuro * commission) / 100;
  let total = totalEuro - commissionEuro;
  console.log(total.toFixed(2));
}
