function add(num1, num2){
    var sum = num1 + num2
    // console.log(sum)
    return sum;
}
var total = add(120, 180)
// console.log(total)

function practicleFees(chemistry, physics){
    var totalFees = chemistry + physics
    var iGet = (totalFees * 90) / 100;
    var myTotalFee = iGet * 21
    return myTotalFee;
}
var myTaka = practicleFees(300, 300)
console.log(myTaka)