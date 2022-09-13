// eslint-disable-next-line no-unused-vars
class Employee {
  // Private variables! New and exciting!
  #salary = 50000;

  constructor(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get salary() {
    return this.#salary;
  }

  set salary(s) {
    s = Number(s);
    if (s && s >= this.#salary) {
      this.#salary = s;
    }
  }
}
