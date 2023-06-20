function basketballEquipment(input) {
  let membershipFee = Number(input[0]);

  let sneakers = membershipFee * 0.6;
  let basket = sneakers * 0.8;
  let ball = basket / 4;
  let acsessories = ball / 5;

  let totalToPay = membershipFee + sneakers + basket + ball + acsessories;

  console.log(totalToPay);
}

basketballEquipment(["550"]);
