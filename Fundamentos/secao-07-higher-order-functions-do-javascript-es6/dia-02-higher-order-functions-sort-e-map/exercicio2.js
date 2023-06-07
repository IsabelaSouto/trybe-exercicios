// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
//   ];
  
// //   const fullNames = [];
  
// //   for (let index = 0; index < persons.length; index += 1) {
// //     fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// //   }

// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullNames);

// transformar todos os numeros para negativo
// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => (number > 0) ? number * (-1) : number);
// console.log(negativeNumbers);

// unir dois arrays para criar um novo
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
));

const productListAtt = updateProducts(products, prices);
console.log(productListAtt);