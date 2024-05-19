
//array
// let course = ['dsa', 'os', 'dbms', 1 , 4, 2.5];

// for(i in course){
//     console.log(course[i]);  //dsa  os  dbms  1  4  2.5
// }

// console.log(course);  //[ 'dsa', 'os', 'dbms', 1, 4, 2.5 ]

//function

// function f(){    //normal function
//     let course = ['dsa', 'os', 'dbms', 1 , 4, 2.5];

// for(i in course){
//     console.log(course[i]);  //dsa  os  dbms  1  4  2.5
//     }
// }

// const f =() => {    ///arrow function
//     let course = ['dsa', 'os', 'dbms', 1 , 4, 2.5];

// for(i in course){
//     console.log(course[i]);  //dsa  os  dbms  1  4  2.5
//     }
// }

// f()  //calling

// function fun(sub){
//     console.log("Subject is: "+sub)
// }

// fun("Maths")
// fun("CS")


//first class function 
// higher order function   
function sum (a, b){  //basic function
    return a+b;
}

let diff = (a, b) => a-b;  // arrow function
// function diff(a, b) {
//     return a-b;
// }

function calculate(otherFun, a, b) {
    return otherFun(a,b);
}

console.log(calculate(sum, 4, 5));  //9
console.log(calculate(diff, 7, 5));  //2