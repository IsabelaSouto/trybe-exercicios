// // lista de nomes
// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; 

// pessoasAprovadas.forEach((nome, index) => {
//   pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
// });
// console.log(pessoasAprovadas);

// // programa para fazer a tabuada do 2
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // numbers.forEach((element) => console.log(element * 2));

// const multiply = (element) => console.log(element * 2);
// numbers.forEach(multiply);

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
  
emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

//retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista

const numbers = [19, 21, 30, 3, 45, 22, 15];
// const numeroDivisivel = () => numbers.find((elemento) => elemento %3 === 0 && elemento %5 === 0);
// console.log(numeroDivisivel(numbers));

console.log(numbers.find((elemento) => elemento %3 === 0 && elemento %5 === 0));

// encontrar o primeiro nome com cinco letras, caso ele exista

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((nome) => nome.length === 5));

// encontrar a música com id igual a '31031685', caso ela exista

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((musicas) => musicas.id === '31031685').title);