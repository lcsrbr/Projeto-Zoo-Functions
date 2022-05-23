const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => employeeName !== undefined ?  data.employees.find((employee) => employeeName === employee.firstName || employeeName === employee.lastName) : {}

  /* 
  employeeName.length !== 0 ? funcaoretonra : []
employeeName === data.employees.firstName || employeeName === data.employees.lastName
 */


/* 
3. Implemente a função getEmployeeByName
Busque as pessoas colaboradoras pelo primeiro ou último nome delas

Retorne um objeto vazio caso a função não receba parâmetros;

Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato:

  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
O que será testado:

Sem parâmetros, deve retornar um objeto vazio;

Quando informado o primeiro nome da pessoa colaboradora, deve retornar o objeto da pessoa colaboradora;

Quando informado o último nome da pessoa colaboradora, deve retornar o objeto da pessoa colaboradora;
 */

module.exports = getEmployeeByName;
