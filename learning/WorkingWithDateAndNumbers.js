function solve() {
  //convret strig to Number
  console.log(+"23");
  //23

  //Parsing
  console.log(Number.parseInt("30px"));
  //30

  console.log(Number.parseFloat("2.5rem"));
  //2.5

  //Check if value is NaN
  console.log(Number.isNaN(20));
  //false

  //cheching if  value is number
  console.log(Number.isFinite(20));
  //true

  //Check if value is integer
  console.log(Number.isInteger(23));
  //True

  //Math and  Rounding

  //square root
  console.log(Math.sqrt(25));
  //5

  //max and min
  console.log(Math.max(5, 10, 150, 139));
  //150
  console.log(Math.min(5, 10, 150, 139));
  //5

  //random
  console.log(Math.trunc(Math.random() * 6) + 1);
  //random number 1-6

  const randomInt = (min, max) =>
    Math.trunc(Math.random() * (max - min + 1) + min);

  console.log(randomInt(10, 20));

  //rounding integers
  console.log(Math.trunc(23.3));
  //23
  console.log(Math.round(23.3));
  //23
  console.log(Math.ceil(23.9));
  //24
  console.log(Math.floor(23.9));
  //23

  //Rounding decimals
  console.log((2.7).toFixed(0));
  //3 --returning string not a number

  //Big int
  console.log(42422222222222222222222222222222222222222313131n);

  //operations with big int
  console.log(1000n + 1000n);

  //you can't make operation with regular numbers , you should only use opeartions with big int.
   //Internationalizing date

  let digit = 23424242.53;

  const locale = navigator.language;
  //take local code

  const options = {
    style: "unit",
    unit: "mile-per-hour",
    currency:'EUR'
  };

  console.log(new Intl.NumberFormat("en-EU").format(digit));
  //23,424,242.53
  console.log(new Intl.NumberFormat("ge-DE", options).format(digit));
  console.log(new Intl.NumberFormat(locale.navigator).format(digit)); //take from web browser
}

}

solve();
