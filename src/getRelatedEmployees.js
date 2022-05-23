const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];


const isManager = (id) => data.employees.some((person) => person.managers.includes(id))

const verifyIsManager = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

function getRelatedEmployees(managerId) {
  const teste = data.employees.filter((person) => (
    person.managers.includes(managerId))
    )
    const names = teste.map((person) => `${person.firstName} ${person.lastName}`)
    try {
      verifyIsManager(managerId);
      return names;
    } catch (error) {
      throw error.message;
    }
}

module.exports = { isManager, getRelatedEmployees };
