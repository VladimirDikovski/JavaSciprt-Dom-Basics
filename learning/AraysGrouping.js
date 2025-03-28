function solve() {
  let movements = [100, 500, -100, 200, 500, 1300];

  const groupedMovements = Object.groupBy(movements, (movements) =>
    movements > 0 ? "deposits" : "withdrawals"
  );
  console.log(groupedMovements);
}

solve();
