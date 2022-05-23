const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
    expect(actual).toContain('Jefferson');
  });
  it('Retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('Retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Verifica se a função é case sensitive', () => {
    const actual = handlerElephants('Availability');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
