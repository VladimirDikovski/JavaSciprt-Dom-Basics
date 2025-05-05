function learning() {
  let movements = [100, 500, -100, 200, 500, 1300];

  const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 500],
    interestRate: 1.2, // %
    pin: 1111,
  };

  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

  const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };

  const account4 = {
    owner: "Sarah Smith",
    movements: [-430, -100],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];

  //slice
  console.log(movements.slice(0, 2));
  //[100, 500]

  //splice
  // console.log(movements.splice(0, 2));
  //[100, 500]
  //Променя масива

  //Reverse
  console.log(movements.reverse());
  //[1300, 500, 200, -100, 500, 100]
  //Променя масива

  //Concat
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [5, 6, 7, 8, 9];
  concatArr = arr1.concat(arr2);
  console.log(concatArr);
  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

  //Join
  let singleString = arr1.join(",");
  console.log(singleString);
  //1,2,3,4,5

  //AT
  console.log(arr1.at(0));
  //1

  //Forech
  arr1.forEach((arr) => console.log(arr));
  //1
  //2
  //3
  //4
  //5
  arr1.forEach((arr, i) => console.log(i, arr));
  //0 1
  //1 2
  //2 3
  //3 4
  //4 5

  //MAP
  arr1 = [1, 2, 3, 4, 5];

  let arr1Plus5 = arr1.map((arr) => arr + 5);
  //[6,7,8,9,10] Map връща нов масив

  //Filter
  arr1 = [-1, -2, -3, 1, 2, 3, 4];
  let positiveValues = arr1.filter((arr) => arr > 0);
  //[1,2,3,4] Filter връща нов масив

  //Reduce
  let sumArr1 = arr1.reduce((acc, arr) => acc + arr);
  console.log(`reduce method ${sumArr1}`);
  //4

  //find
  let jesica = accounts.find((acc) => acc.owner === "Jessica Davis");
  //Връща намерения първи обект;
  console.log(`jesica ${jesica}`);

  movements = [100, 500, -100, 200, 500, 1300];

  // findlast
  let findLastBiggestMovment = movements.findLast((mov) => mov > 1000);
  console.log(findLastBiggestMovment);
  //1300

  //findLastIndex
  let findIndexBiggestMovment = movements.findLastIndex((mov) => mov > 1000);
  console.log(findIndexBiggestMovment);
  //5

  //Some
  //check condition
  let anyDeposits = movements.some((mov) => mov > 0);
  console.log(anyDeposits);
  //true

  //inculdes
  // check Equality
  console.log(movements.includes(-130));
  //true

  //Every Method

  //Връща ТRUE ако всички елементи в масива отговарят на условието
  console.log(movements.every((mov) => mov > 0));
  //False

  //Separete collback function

  const deposit = (mov) => mov > 0;
  console.log(movements.some(deposit));
  //True

  //Flat Method

  const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  console.log(arr.flat());
  //[1, 2, 3, 4, 5, 6, 7, 8]

  const arrDeep = [
    [1, [2, 3]],
    [4, 5, 6],
    [[7, 8], 9],
  ];
  console.log(arrDeep.flat(2));
  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

  //FlatMap method

  //Old way flat
  let totalMovments = accounts
    .map((mov) => mov.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
  console.log(totalMovments);
  //15540

  let totalMovments2 = accounts
    .flatMap((mov) => mov.movements)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(totalMovments2);
  //15540
  //just one level deep

  //Sort Arrays

  const owners = ["Jonas", "Zash", "Adam", "Martha"];
  console.log(owners.sort());
  //['Adam', 'Jonas', 'Martha', 'Zash']
  //Променя Масива

  console.log(movements);
  console.log(movements.sort());
  //[-100, 100, 1300, 200, 500, 500]

  //Return < 0  A,B (Keep order)
  //Return >0   B,A (Switch order)
  //Assending
  movements.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
  });

  movements.sort((a, b) => a - b);
  console.log(movements);
  //[-100, 100, 200, 500, 500, 1300]

  //Desending
  movements.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
  });
  movements.sort((a, b) => b - a);
  console.log(movements);
  //[1300, 500, 500, 200, 100, -100]
}

learning();
