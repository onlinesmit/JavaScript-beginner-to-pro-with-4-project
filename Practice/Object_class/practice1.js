let Product = {
  Name: 'Shirt',
  Color: 'Blue',
  Prize: 500,
  Size: 30,
  Fit: 'Slim fit',
  Delivery_time: 'Same day'  // Corrected key name to use camelCase
};

// Destructure properties from the Product object
let {Name, Color, Prize, Size, Fit, Delivery_time} = Product; // Using curly braces to destructure properties
console.log(Name);  // Output: Shirt
console.log(Color);  // Output: Blue
console.log(Prize);  // Output: 500
console.log(Fit);  // Output: Slim fit
console.log(Size);  // Output: 30
console.log(Delivery_time);  // Output: Same day


let copyProduct = { ...Product };  // Create a shallow copy of the Product object
console.log(Product);  // Output the original Product object
// Output: {Name: 'Shirt', Color: 'Blue', Prize: 500, Size: 30, Fit: 'Slim fit', Delivery_time: 'Same day'}

copyProduct.Name = 'Jeans'; 
copyProduct.Size = 32; // Change the properties of the copied object

console.log(copyProduct.Name);  // Output: Jeans
console.log(copyProduct.Size);  // Output: 32
console.log(Product);  // Output the original Product object after changes
// Output: {Name: 'Shirt', Color: 'Blue', Prize: 500, Size: 30, Fit: 'Slim fit', Delivery_time: 'Same day'}
