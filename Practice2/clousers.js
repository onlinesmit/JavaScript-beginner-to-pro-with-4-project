function outer() {
    function inner() {
        console.log("Hello !!")
    }
    return inner
}

let retunFunOuter = outer();
console.log(retunFunOuter)
retunFunOuter()