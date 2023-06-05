// const pessoas = [
//     { nome: 'Ana', cargo: 'Analista' },
//     { nome: 'João', cargo: 'Gerência' },
//     { nome: 'Aline', cargo: 'Analista' },
//     { nome: 'Joana', cargo: 'Gerência' },
//   ];

// // console.log(pessoas.some((pessoas) => pessoas.cargo === 'Gerência')); // somente ver se tem alguem nesse cargo
// //console.log(pessoas.find((pessoas) => pessoas.cargo === 'Gerência').nome); // achar quem é a pessoa

// console.log(pessoas.some((pessoas) => pessoas.cargo === 'Product Owner')); 

// verificar se existe algum nome que comece com a letra desejada
// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('X', listNames)); // false

// verificar se passou em todas as matérias 
// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
//   };
  
//   const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
  
//   console.log(verifyGrades);

// conferir a lista de pessoas convidadas de uma festa de casamento 
// e precisa verificar se o nome da pessoa está ou não na lista
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some(nomeLista => nomeLista === name);

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = () => people.every((age) => age === 18);
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));