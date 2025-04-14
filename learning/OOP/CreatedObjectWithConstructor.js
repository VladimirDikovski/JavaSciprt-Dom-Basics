const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this way
  //   this.calcAge =function(){
  //     console.log(2037 -this.birthYear);
  //   }
};

const vladi = new Person("Vladimir", 1990);
console.log(vladi);

//1 New {} is created
//2 function is called, this={}
//3 {} linked to prototype
//4 function automatically return {}
