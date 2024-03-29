
// localStorage.setItem('Name', 'Smit');   //out put give in aplication part in browser
// localStorage.setItem('Size', '564');

// console.log(localStorage.getItem('Name'));  //output give in console:  Smit


// let product = {

//   Name: 'Shirt',
//   Prize: 354,
//   rating: {
//     NoOfDownloads: 55,
//     Stars: 4.5,
//   } ,
// };

// // localStorage.setItem('product', product);  //it give the error because product not in string format

// localStorage.setItem('product', JSON.stringify(product));  //now it converted in string format now it give correct output

// console.log(localStorage.getItem('product'));    //{"Name":"Shirt","Prize":354,"rating":{"NoOfDownloads":55,"Stars":4.5}}


// //again convert into Object
// let object2 = JSON.parse(localStorage.getItem('product'));
// console.log(object2);    //{Name: 'Shirt', Prize: 354, rating: {…}}Name: "Shirt"Prize: 354rating: {NoOfDownloads: 55, Stars: 4.5}[[Prototype]]: Object


localStorage.removeItem('Size');  //used to remove the component from storage  by giving the key name

localStorage.clear();   // it is used to clear the all storage data 


