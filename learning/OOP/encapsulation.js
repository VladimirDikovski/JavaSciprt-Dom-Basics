class Bank {
  #pin;
  constructor(username, pin) {
    this.username = username;
    this.#pin = pin;
  }
}

const Jones = new Bank("Jonas", 1111);
console.log(Jones.username);
