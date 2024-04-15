let arr = [2, 5, 1, 65, 34, 5];
console.log(arr);  //[2, 5, 1, 65, 34, 5]

console.log(arr.sort());  //[1, 2, 34, 5, 5, 65]

let [a, b , c, d] = arr;
console.log(a + ' ' + b + ' ' + c + ' ' + d);  //1 2 34 5

console.log(Array.isArray(arr));  //true    check array or not