let course = {
    title: "obj",
    discription: "non",
    rate: 4
}

console.log(course)
console.log(typeof(course))

console.log(course.title)  //dot notation to access element
console.log(course['title'])   //Bracket notation

let x = "Smit"
let y =x

x = "Arvind"

console.log("Name is "+x)
console.log("Name is "+y)  // here value will be not change

let n = { name: 'Sk'}

let m = n

n.name = 'Ak'

console.log("Name is "+n.name)
console.log("Name is "+m.name)  //but here the value change because its access the reference 

