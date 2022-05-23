const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
  // seu código aqui
}

function calculateEntry(entrants = 0) {
  if (Object.keys(entrants).length === 0 || entrants === 0) {
    return 0;
  }
  const child = entrants.filter((person) => person.age < 18).length;
  const childPrice = child * data.prices.child;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const adultPrice = adult * data.prices.adult;
  const senior = entrants.filter((person) => person.age >= 50).length;
  const seniorPrice = senior * data.prices.senior;
  const totalPrice = seniorPrice + adultPrice + childPrice;
  return totalPrice;
  // seu código aqui
}

module.exports = {
  calculateEntry,
  countEntrants,
};
