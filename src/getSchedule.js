const data = require('../data/zoo_data');

function getWeekSchedule(day) {
  const animalsArray = data.species.filter((specie) => (specie.availability.includes(day)));
  if (day === 'Monday') {
    return {
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [day]: {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: animalsArray.map((animals) => animals.name),
    },
  };
}

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(data.hours);

  const infos = weekDays.reduce((acc, curr) => ({
    ...getWeekSchedule(curr),
    ...acc,
  }), {});

  if ((Object.keys(infos)).includes(scheduleTarget)) { // se for um dia da semana
    return {
      [scheduleTarget]: infos[scheduleTarget],
    };
  }
  if (Object.values(data.species).map((specie) => specie.name).includes(scheduleTarget)) { // se for um animal
    const daysSpec = data.species.find((specie) => specie.name === scheduleTarget).availability;
    return daysSpec;
  }
  return infos;
}

module.exports = getSchedule;
