//class expression

// const PersonCL =class{

// }

//class declaration

class PersonCl {
  //add constructor method
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //add methods
  //Methods will be added to .prototype property of the person class

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const vladi = new PersonCl("vladi", 1990);
console.log(vladi);

//1. classes are not hoisted.
//2.Classes are first-class citizes
//3 .Classes are executed in strict mode

//Seters and Getters

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  set year(year) {
    if (year > 0) {
      this._year = year;
    } else {
      console.log("Invalid year");
    }
  }

  get year() {
    return this._year;
  }
}

const bmw = new Car("BMW", "E60", 1990);
console.log(bmw.year);

//static methods

class Book {
  constructor(name, pages) {
    this.name = name;
    this.pages = pages;
  }

  //static mothod

  static overViewBook() {
    console.log("Hello");
  }
}

const lotro = new Book("The Lord Of The Rings", 500);
// console.log(lotro.overViewBook()); //invalid because static methods point to the constructor , not to the prototype

Book.overViewBook();

//Object Create Method

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.name = "Stevan";
steven.birthYear = 1937;
steven.calcAge();

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at this ${this.speed} speed`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at this ${this.speed} speed`);
  }
}

const ford = new CarCl("Ford", 250);

ford.speedUS = 300;
console.log(ford);
