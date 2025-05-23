//Inheritance between constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Link to prototype of the Person. !!!
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName} and i am student in ${this.course}`);
};

const vladi = new Student("Vladi", 1990, "Computer Sience");

//NOW we can able to do this
vladi.calcAge();
console.log(vladi);

//Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at this ${this.speed} speed`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at this ${this.speed} speed`);
};

const bmw = new Car("BWM", 120);
console.log(bmw.make, bmw.speed);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
