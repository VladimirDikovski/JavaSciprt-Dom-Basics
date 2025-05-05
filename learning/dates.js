function solve() {
  //craate a date
  const now = new Date();
  //now

  console.log(new Date("Aug 02 2020 13:05:41"));
  //Sun Aug 02 2020 13:05:41 GMT+0300 (Eastern European Summer Time)
  console.log(new Date("December 24,2015"));
  //Thu Dec 24 2015 00:00:00 GMT+0200 (Eastern European Standard Time)

  console.log(new Date(2037, 10, 19, 15, 23, 5));

  console.log(new Date(0));
  //Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)
  console.log(new Date(3 * 24 * 60 * 60 * 1000)); //timestamp
  //Sun Jan 04 1970 03:00:00 GMT+0300 (Eastern European Standard Time)

  //methods
  const future = new Date(2037, 10, 19, 15, 23);
  console.log(future.getFullYear());
  //2037
  console.log(future.getMonth() + 1);
  //11
  console.log(future.getDate());
  //19
  console.log(future.getDay());
  //4
  console.log(future.getHours());
  //15
  console.log(future.getMinutes());
  //23
  console.log(future.getSeconds());
  //0
  console.log(future.toISOString());
  //2037-11-19T13:23:00.000Z
  console.log(future.getTime());
  //2142249780000
  console.log(new Date(2142249780000));
  //Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Standard Time)

  future.setFullYear(2024);
  console.log(future);
  //Tue Nov 19 2024 15:23:00 GMT+0200 (Eastern European Standard Time)

  /Internationalizing date

  const options = {
    hour: "numeric",
    miute: "numeric",
    day: "numeric",
    month: "numeric", //long ,2digit
    year: "numeric", //2 digit
    weekday: "long",
  };

  const date = new Date();
  const locale = navigator.language;
  //take local code
  console.log(locale);
  //en-Us

  console.log(new Intl.DateTimeFormat(locale, options).format(date));
  //check for diffrent format in google ISO language  code table lingoes
}

}

solve();
