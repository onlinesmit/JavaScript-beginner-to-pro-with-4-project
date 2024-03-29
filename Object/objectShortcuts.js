// Object shortcuts mostly used
// property Shortcuts most avoided little bit confusing
// method shortcuts


let product = {
  Name: 'ABC',
  PId: 14,
  Prize: 342,
};

//method 1 accessing the data from objects 
console.log(product.Name);  //ABC
console.log(product.Prize);   //342

//method 2
console.log(product['Name']);  //ABC
console.log(product['Prize']);  //342

//method 3
let {Name, Prize} = product;   //object destructuring
console.log(Name);   // ABC
console.log(Prize); // 342