const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const specieCount = {};
    data.species.forEach((specie) => {
      specieCount[specie.name] = specie.residents.length;
    });
    return specieCount;
  }
  const specieFind = data.species.find((animals) => animals.name === animal.specie).residents;
  if (!animal.sex) {
    return specieFind.length;
  }
  return specieFind.filter((specie) => specie.sex === animal.sex).length;
}

module.exports = countAnimals;
