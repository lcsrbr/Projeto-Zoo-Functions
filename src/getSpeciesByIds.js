const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.length !== 0 ? ids.map((id) => data.species.find((animals) => animals.id === id)) : [];
}

module.exports = getSpeciesByIds;
