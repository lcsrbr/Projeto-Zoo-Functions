const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const verify = data.employees.find((emp) => name === emp.firstName || name === emp.lastName);
  return name !== undefined ? verify : {};
};

module.exports = getEmployeeByName;
