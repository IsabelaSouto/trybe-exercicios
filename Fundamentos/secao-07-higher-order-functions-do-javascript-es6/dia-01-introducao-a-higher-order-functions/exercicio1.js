const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
  
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
});

//retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista

const numbers = [19, 21, 30, 3, 45, 22, 15];
const numeroDivisivel = (numero) =>
  numbers.find((elemento) => elemento %3 === 0 && elemento %5 === 0);
console.log(numeroDivisivel(numbers));