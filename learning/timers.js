function solve() {
  //time go once
  //Set timer
  let names = ["Vladimir", "Tsvetan", "Katina"];

  const nameTimer = setTimeout(
    (name) => console.log(`I am ${name}`),
    3000,
    ...names
  );

  if (names.includes("Vladimir")) {
    clearTimeout(nameTimer);
  }

  //SetInterval

  setInterval(function () {
    const newDate = new Date();
    console.log(
      `${newDate.getHours()}:${newDate.getMinutes()} ${newDate.getSeconds()}`
    );
  }),
    1000;
}

solve();
