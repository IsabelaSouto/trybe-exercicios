//console.log("Log 1");

//setTimeout(() => console.log("Async log"), 1000);

//console.log("Log 2");
//console.log("Log 3");

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} não é válido`));
    }, 1000);
  });

  const randomPromise = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            const randomNumber2 = generateRandomNumber();
            if (randomNumber2 % 2 === 0) {
                resolve(randomNumber2);
            } else {
                reject(new Error(`O número ${randomNumber2} não é válido. Somente números pares são válidos`))
            }
        }, 1000);
    });

  //resolvedPromise().then((response) => {
  //  console.log(`rejectedPromise: O número gerado é ${response}`);
  //});

  //rejectedPromise()
  //.then((response) => {
  //  console.log(`rejectedPromise: O número gerado é ${response}`);
  //})
  //.catch((error) => {
  //  console.log(`RejectedPromise: ${error.message}`);
  //});

  randomPromise()
    .then(response => {
        console.log(`Promise resolvida: O número gerado é ${response}`)
    })
    .catch(error => {
        console.log(`Promise rejeitada: ${error.message}`)
    });
// promise rejeitada retornando um objeto de erro
// const generateRandomNumber = () => Math.round(Math.random() * 10);

//const rejectedPromise = () =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      reject(new Error(`O número ${randomNumber} é inválido.`));
//    }, 1000);
//  });
//  console.log(rejectedPromise());