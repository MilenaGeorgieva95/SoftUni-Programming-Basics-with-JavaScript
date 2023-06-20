function trekkingMania(input) {
  let qtyGroups = Number(input[0]);
  let groupMembersQty = 0;

  let musalaPpl = 0;
  let monblanPpl = 0;
  let kilimandjaroPppl = 0;
  let k2Pppl = 0;
  let everestPppl = 0;

  for (let i = 1; i <= qtyGroups; i++) {
    groupMembersQty = Number(input[i]);

    if (groupMembersQty <= 5) {
      musalaPpl += groupMembersQty;
    } else if (groupMembersQty <= 12) {
      monblanPpl += groupMembersQty;
    } else if (groupMembersQty <= 25) {
      kilimandjaroPppl += groupMembersQty;
    } else if (groupMembersQty <= 40) {
      k2Pppl += groupMembersQty;
    } else {
      everestPppl += groupMembersQty;
    }
  }
  let totalPpl =
    musalaPpl + monblanPpl + kilimandjaroPppl + k2Pppl + everestPppl;

  console.log(((musalaPpl / totalPpl) * 100).toFixed(2) + "%");
  console.log(((monblanPpl / totalPpl) * 100).toFixed(2) + "%");
  console.log(((kilimandjaroPppl / totalPpl) * 100).toFixed(2) + "%");
  console.log(((k2Pppl / totalPpl) * 100).toFixed(2) + "%");
  console.log(((everestPppl / totalPpl) * 100).toFixed(2) + "%");
}
