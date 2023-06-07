// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

// food.sort();
// console.log(food);

// const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];

// // inventory.sort((a, b) => a - b); // foi necessário colocar o a - b para que o 10 vá para depois, pois o resultado de 1 - 10 ficaria negativo
// // console.log(inventory);

// inventory.sort((a, b) => b - a); // ordem inversa
// console.log(inventory);

// organizar o sistema de pessoas colaboradoras de uma rede de mercados

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   people.sort((person1, person2) => person1.name - person2.name ? 1 : -1);
  
//   console.log(people);

  // ordene o array pela idade das pessoas em ordem decrescente
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((person1, person2) => person2.age - person1.age);
  
  console.log(people);