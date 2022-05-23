const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((specie) => specie.name === animal).residents;
  return animals.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
