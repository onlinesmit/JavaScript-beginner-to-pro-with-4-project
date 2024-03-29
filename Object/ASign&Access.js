// let user = {
//   fName: 'Smit',
//   lName: 'Kumar',
//   Age: 24,

// };

// console.log(user.fName);  //by using dot notations
// console.log(user.lName);
// console.log(user.Age)

// console.log(user['fName']);  //by using brackets 

// let Name = 'lName';

// console.log(user.Name);  // not accessable by using dot it give output undefined

// console.log(user[Name]); // output is:  Kumar

// console.log(user);  //{fName: 'Smit', lName: 'Kumar', Age: 24}

// delete user('lName');

// console.log(user);


let p = {pop: 'abc'};
let q = {pop: 'abc'};

console.log(p == q);  //false  because its check reference value and the referece/ adress of both different
console.log(p === q); // false   same logic like above