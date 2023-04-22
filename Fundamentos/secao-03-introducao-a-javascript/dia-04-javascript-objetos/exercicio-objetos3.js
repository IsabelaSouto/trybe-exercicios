// Exemplo de for/in

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Exemplo de for/in

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  // Exemplo de for/in vs for/of

  let food = ['hambúrguer', 'bife', 'acarajé'];

  for (let positions in food) {
    console.log(positions);
  };

  for (let value of food) {
    console.log(value);
  };

  //Exercicio 1 para fixar!

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let pessoa in names) {
    console.log('Olá, ' + names.person1);
    console.log('Olá, ' + names.person2);
    console.log('Olá, ' + names.person3);
  };

  // Exercicio 2 para fixar!

  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index in carro) {
    console.log(index, carro[index]);
};