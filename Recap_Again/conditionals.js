// console.log(5 >= 6)
// console.log(5 === '5')
const myTaka = 160000;
const xtremePrice = 171000;
const hondaSP125 = 150000;
// if(myTaka > xtremePrice){
//     console.log("Insha-Allah! I will buy Hero Xtreme 125R")
// }else if(myTaka > hondaSP125 ){
//     console.log("I will buy Honda SP 125")
// }else{
//     console.log("I am happy with my present bike")
// }
// Ternary Operatons
myTaka >= xtremePrice ? console.log("I will buy Hero Xtreme") : console.log("I will happy with my present bike");

let price = 500;
const isPoor = false;
price = isPoor ? 0 : price + 100
console.log(price)
