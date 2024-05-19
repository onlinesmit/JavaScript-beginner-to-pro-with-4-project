
fun("Maths")  //its call before creating function called hoisting 

function fun(sub){
    console.log("Subject is: "+sub)
}

fun("CS")

//the hoisting only working on var its not access the let or const value its gve the reerence error its called temporal deadzone