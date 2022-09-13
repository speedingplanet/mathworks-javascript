function employeeFactory(firstName, lastName) {
  let salary = 50000;
  return {
    firstName,
    lastName,
    getSalary() {
      return salary;
    },
    setSalary(s) {
      s = Number(s);
      if (s && s >= salary) {
        salary = s;
      }
    },
  };
}

const emp1 = employeeFactory('John', 'Paxton');
console.log("employee 1's salary: ", emp1.getSalary());
