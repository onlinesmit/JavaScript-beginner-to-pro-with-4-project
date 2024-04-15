//task 1

// let arr = [5, 6];
// arr.push(7);
// console.log(arr);  // adding element in the last

// arr.unshift(4);  // adding element at the beginning
// console.log(arr);

//task 2

// function getElement(arr, position){
//   return arr[position-1];  //position 1 to 9
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // index 0 to 8
// console.log(getElement(arr, 2));  //2
// console.log(getElement(arr, 6));  //6
// console.log(getElement(arr, 12));  //undefined

// task 3

// function copyGen(arr){
//   return arr.slice(0, arr.length);
// }

// let arr = [2, 4, 5, 7, 9, 6];

// // console.log(arr.slice(1, 4));  // 4 5 7
// console.log(copyGen(arr));   // [2, 4, 5, 7, 9, 6]

//task 4

// function primeNo(nums){
//   for(let i=2; i<nums; i++){
//     if(nums % i === 0){
//      return false;
//     }
//   }
//   return true;
// }

// let num = 2;
// let i =0;
// while(i < 10){
//   if(primeNo(num)){
//   console.log(num);   // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
//   i++;
//   }
// num++;
// }


// //task 5

// function primeNo(nums){
//   for(let i=2; i<nums; i++){
//     if(nums % i === 0){
//      return false;
//     }
//   }
//   return true;
// }

// let num = 2;
// let i =0;
// while(true){   //always true
//   if(primeNo(num)){
//   console.log(num);   // 2, 3, 5, 7, 11
//   i++;

//   if(i>=5){
//     break;
//   }
//   }
// num++;
// }


//task 6  print only possitive integer

// let arr = [1, -6, 5, 7, -98];
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] < 0){
//     continue;
//    }
//    else{
//     console.log(arr[i]);
//    }
// }

// tasl 7  reverse

// let arr = [2, 4, 5, 7, 9, 6];
// let reverseArr = [];

// for (let i = arr.length-1; i >= 0; i--) {
//   reverseArr.push(arr[i]);
// }

// console.log(reverseArr);


//task 8

let arr = ['This', 'is', 'the', 'best', 'course', 'on', 'JavaScript'];

//user logic
// let result = '';   
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i] + ' ';
// }
// console.log(result);

console.log(arr.join(' '));   // predefined

