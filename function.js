
// const button = document.getElementById("btn-click")

// function clickFunction(){
//     alert("Do not touch me")
//  }

// button.addEventListener("click", clickFunction)

let x = 5;
let y = 6;
x = y;
y = 8;
// console.log(x)
// console.log(y)
const skills = ["JS", "Python", "REACT"]

skills.push("Firebase")
// console.log(skills)

// Array Methods
const fruits = ["Banana", "Mango", "Orange", "Apple", "Pineapple"]

const result1 = fruits.find((f) => f === "Orange");
const result2 = fruits.filter((f) => f === "Orange" || f === "Apple");
const result3 = fruits.slice(1, 4);
// console.log(result1)
// console.log(result2)
// console.log(result3)

var n = 5;
var p = 12;

function square(n, p){
    var value = n * p;
    return value
} 
var square1 = square(n ,p)
var square2 = square(12, 14)
// console.log(square1)
// console.log(square2)

/*
    1. Function can be assigned to a variable
    2.Function can be passed as an argument
    3. Function can be returned from another function
    4. Function can be stored in data structure like array, object etc.
*/
let now = new Date();
let dayOfWeek = now.getDate();
if(dayOfWeek == 31){
    // console.log("Have a nice weekend!")
}else{
    // console.log("Wait for Weekend")
}

let money = 2000;
if(money > 3000){
    // console.log("Wow! I will buy a Smartphone")
}else if(money <= 2000){
    // console.log("I will buy Feature Phone")
}else{
    // console.log("I will buy toy Phone")
}
let fool = ["Mango", "Orange", "Banana", "Apple", "Pineapple"]
for (let i = 0 ; i < Array.length; i++){
    console.log(fool)
}
// console.log(fool)