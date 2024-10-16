let totalMoney = 1000;
let applePrice = 300;
let mangoPrice = 400;
let totalCost = applePrice + mangoPrice;
let remainingMoney = totalMoney - totalCost;
console.log(remainingMoney)

// ---------------------------------
let bangla = 75.25;
let math = 65;
let chemistry = 80;
let biology = 35.45;
let physics = 99.50;
let totalMarks = bangla + math + chemistry + biology + physics;
let average = totalMarks / 5;
average = average.toFixed(2);
// If I converted result in decimal, the result changes in string. Then we have to change this in number
average = parseFloat(average)
console.log(average)    