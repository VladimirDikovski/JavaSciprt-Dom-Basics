const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this way
  //   this.calcAge =function(){
  //     console.log(2037 -this.birthYear);
  //   }
};

const vladi = new Person("Vladimir", 1990);

//1 New {} is created
//2 function is called, this={}
//3 {} linked to prototype
//4 function automatically return {}

//prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.lastName = "Dikovski";

console.log(vladi.__proto__.__proto__);

//chalanges

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car("BWM", 120);
console.log(bmw.make, bmw.speed);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
