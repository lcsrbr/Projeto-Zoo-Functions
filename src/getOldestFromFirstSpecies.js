const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const [firstAnimal] = data.employees.find((person) => person.id === id).responsibleFor; // id do animal
  const [residents] = data.species.find((animal) => animal.id === firstAnimal).residents
    .sort((a, b) => b.age - a.age);
  return Object.values(residents);
  // seu código aqui
}

module.exports = getOldestFromFirstSpecies;
