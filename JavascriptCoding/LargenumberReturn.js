function largeNumber(a , b){
  if(a > b){
    return `Greater is: ${a}`;
  }
  else{
    return `Greater is: ${b}`;
  }
}

console.log(largeNumber(3, 6));
console.log(largeNumber(-6, 1));
console.log(largeNumber(-2 , -6));
console.log(largeNumber(0 , -3));
console.log(largeNumber(9 , 12));
