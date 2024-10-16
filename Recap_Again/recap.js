// JavaScript Scope Recap
var x = 10;

function scopeTest (){
    var y = 15;
    // console.log(`${x} is from global scope`)
    // console.log(`${y} is from function scope`)
}
scopeTest()


if(true){
    var varVariable = 42
    console.log(varVariable, "This is from block scope")
}
console.log(varVariable , "This is from Global scope, its from block scope")
let letVariable = 15
console.log(letVariable)
if(true){
    let letVariable = 51;
    // This letVariable is not accessible from the global scope
    console.log(letVariable , "This is from block scope")
    
}
console.log(letVariable)