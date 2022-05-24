const data = require('../data/zoo_data');

const idsEmpl = data.employees.map((person) => person.id);
const nameEmpl = data.employees.map((person) => person.firstName);
const lastNameEmpl = data.employees.map((person) => person.lastName);
const searchType = (param) => {
  if (idsEmpl.includes(param.id)) {
    return data.employees.find((person) => person.id === param.id);
  }
  if (nameEmpl.includes(param.name)) {
    return data.employees.find((person) => person.firstName === param.name);
  }
  if (lastNameEmpl.includes(param.name)) {
    return data.employees.find((person) => person.lastName === param.name);
  }
  throw new Error('Informações inválidas');
};

function getEmployObject(param) {
  const objEmpl = searchType(param);
  const speciesId = objEmpl.responsibleFor.map((animal) => animal);
  const objRetr = {
    id: objEmpl.id,
    fullName: `${objEmpl.firstName} ${objEmpl.lastName}`,
    species: [],
    locations: [],
  };
  for (let i = 0; i < speciesId.length; i += 1) {
    objRetr.species.push(data.species.find((specie) => specie.id === speciesId[i]).name);
  } // kkkk depois eu refatoro
  for (let i = 0; i < speciesId.length; i += 1) {
    objRetr.locations.push(data.species.find((specie) => specie.id === speciesId[i]).location);
  } // aiai...
  return objRetr;
}

function getAllEmployObject() {
  const arr = [];
  data.employees.forEach((employee) => arr.push(getEmployObject({
    id: employee.id,
  })));
  return arr;
}

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return getAllEmployObject();
  }
  return getEmployObject(param);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
