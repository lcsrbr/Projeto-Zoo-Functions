const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((person) => person.managers.includes(id));

const verifyIsManager = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

function getRelatedEmployees(managerId) {
  const teste = data.employees.filter((person) => (
    person.managers.includes(managerId)));
  const names = teste.map((person) => `${person.firstName} ${person.lastName}`);
  try {
    verifyIsManager(managerId);
    return names;
  } catch (error) {
    throw error.message;
  }
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
