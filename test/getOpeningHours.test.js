const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('O nome do dia da semana passado como argumento tem que ser em inglês', () => {
    expect(() => getOpeningHours('Segunda', '10:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('O horário precisa ter a seguinte formatação "XX:XX-XM"', () => {
    expect(() => getOpeningHours('Monday', '10:00')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('As horas serão validadas na nomenclatura "AM e PM"', () => {
    expect(() => getOpeningHours('Sunday', '20:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Os minutos deverão estar entre 0 e 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:80-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
  it('Os minutos deverão ser representados por números', () => {
    expect(() => getOpeningHours('Tuesday', '09:0x-AM')).toThrow(/^The minutes should represent a number$/);
  });
    it('As horas deverão estar entre 0 e 59', () => {
      expect(() => getOpeningHours('Tuesday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
    });
    it('As horas deverão ser representados por números', () => {
      expect(() => getOpeningHours('Tuesday', '0x:00-AM')).toThrow(/^The hour should represent a number$/);
  });
  it('A função não faz diferenciação entre maiúsculas e minúsculas', () => {
    const actual = getOpeningHours('sunday', '12:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
    const actual2 = getOpeningHours('Sunday', '12:00-AM');
    expect(actual2).toEqual(expected);
  });
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: {
        open: 8,
        close: 6,
      },
      Wednesday: {
        open: 8,
        close: 6,
      },
      Thursday: {
        open: 10,
        close: 8,
      },
      Friday: {
        open: 10,
        close: 8,
      },
      Saturday: {
        open: 8,
        close: 10,
      },
      Sunday: {
        open: 8,
        close: 8,
      },
      Monday: {
        open: 0,
        close: 0,
      },
    };
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed" (Já que o Zoo está sempre fechado na segunda)', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
});
