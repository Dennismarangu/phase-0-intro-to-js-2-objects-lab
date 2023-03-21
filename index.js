// Write your solution in this file!
const employee = {
    name: 'Dennis',
    streetAddress: '0100',
}

// const employee2 = { name: 'John', age: 30, position: 'Manager' };
// const updatedEmployee2 = ('Dennis', 'age', 31);
// console.log(updatedEmployee2);

// console.log(employee2);

// const employee3 = { name: 'John', age: 30, position: 'Manager' };
// employee2('John', 'age', 31);

// console.log(employee2);

// function deleteFromEmployee3(John, key) {
//   const { [key]: deletedKey, ...rest } = John;
//   return rest;
// }

// function destructivelyDeleteFromEmployee3(John, key) {
//   delete John[key];
//   return John;
// }

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const { [key]: deletedKey, ...newEmployee } = employee;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}