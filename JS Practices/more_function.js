function toCelsius(f) {
    return (5/9) * (f - 32)
}
let value = toCelsius(104)
// console.log(value)
// ------------------------------
function multiply (a,b) {
    const result = a * b;
    return result;
}
const product = multiply(3, 10);
// console.log(product)
// --------------------------------
const multiply2 = function(x, y){
    return x * y
}
const result2 = multiply2(4, 3);
// console.log(result2)
// ----- Arrow -----------------
const multiply3 = (x, y) =>{
    return x * y
}
const result4 = multiply3(10, 23);
console.log(result4)