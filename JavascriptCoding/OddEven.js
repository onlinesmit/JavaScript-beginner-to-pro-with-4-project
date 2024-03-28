
function OddEvenCheck(n){
  if (n % 2 == 0) {
    return 'Even Number: ';
  }
  else{
    return 'Odd number: ';
  }
}

console.log(OddEvenCheck(3));
console.log(OddEvenCheck(1));
console.log(OddEvenCheck(4));
console.log(OddEvenCheck(40));