let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  customer1.lastName = 'Faria';
  console.log(customer1);

  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };

  customer2['lastName'] = 'Silva';
  console.log(customer2);