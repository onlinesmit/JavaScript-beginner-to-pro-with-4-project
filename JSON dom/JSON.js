let product = {

  Name: 'Shirt',
  Prize: 354,
  rating: {
    NoOfDownloads: 55,
    Stars: 4.5,
  } ,
};

console.log(product);
console.log('typeof product: ' +(typeof product));

let str = JSON.stringify(product);   //convert into String  

console.log(str);

console.log('typeof product: ' +(typeof str));


let newProduct = JSON.parse(str);  //convert into object
console.log(newProduct);

console.log('Type of new Project: ' +(newProduct));