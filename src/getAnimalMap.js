const data = require('../data/zoo_data');

function generateDefaut() {
  const getSchedule = (location) => {
    const locationO = data.species.filter((specie) => specie.location === location);
    return locationO.map((specie) => specie.name);
  };
  const geo = ['NE', 'NW', 'SE', 'SW'];
  const infos = geo.reduce((acc, curr) => ({
    [curr]: getSchedule(curr),
    ...acc,
  }), {});
  return infos;
}

function includeGen(param) {
  const getSchedule = (location) => {
    const locationO = data.species.filter((specie) => specie.location === location);
    const animalArray = locationO.map((species) => ({
      [species.name]: species.residents.map((each) =>
        each).filter((animal) =>
        animal.sex === param).map((wild) => wild.name),
    }));
    return animalArray;
  };
  const geo = ['NE', 'NW', 'SE', 'SW'];
  const infos = geo.reduce((acc, curr) => ({
    [curr]: getSchedule(curr),
    ...acc,
  }), {});
  return infos;
}

function includeGenSort(param) {
  const getSchedule = (location) => {
    const locationO = data.species.filter((specie) => specie.location === location);
    const animalArray = locationO.map((species) => ({
      [species.name]: species.residents.map((each) =>
        each).filter((animal) =>
        animal.sex === param).map((wild) => wild.name).sort(),
    }));
    return animalArray;
  };
  const geo = ['NE', 'NW', 'SE', 'SW'];
  const infos = geo.reduce((acc, curr) => ({
    [curr]: getSchedule(curr),
    ...acc,
  }), {});
  return infos;
}

function includeNames() {
  const getSchedule = (location) => {
    const locationO = data.species.filter((specie) => specie.location === location);
    return locationO.map((specie) => ({
      [specie.name]: specie.residents.map((animal) => animal.name),
    }));
  };
  const geo = ['NE', 'NW', 'SE', 'SW'];
  const infos = geo.reduce((acc, curr) => ({
    [curr]: getSchedule(curr),
    ...acc,
  }), {});
  return infos;
}

function namesSorted() {
  const getSchedule = (location) => {
    const locationO = data.species.filter((specie) => specie.location === location);
    return locationO.map((specie) => ({
      [specie.name]: specie.residents.map((animal) => animal.name).sort(),
    }));
  };
  const geo = ['NE', 'NW', 'SE', 'SW'];
  const infos = geo.reduce((acc, curr) => ({
    [curr]: getSchedule(curr),
    ...acc,
  }), {});
  return infos;
}

function getOptions(options) {
  if (options.sex && options.sorted === true) {
    return includeGenSort(options.sex);
  }
  if (options.sorted === true) {
    return namesSorted();
  }
  if (options.sex) {
    return includeGen(options.sex);
  }
  return includeNames();
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return generateDefaut();
  }
  if (options.includeNames === true) {
    return getOptions(options);
  }
}

module.exports = getAnimalMap;
