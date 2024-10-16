function add(num1, num2){
    var sum = num1 + num2
    // console.log(sum)
    return sum;
}
var total = add(120, 180)
// console.log(total)
// --------Practical Fees calculator---------
function practicalFees(chemistry, physics){
    var totalFees = chemistry + physics
    var iGet = (totalFees * 50) / 100;
    var myTotalFee = iGet * 21
    return myTotalFee;
}
var myTaka = practicalFees(500, 500)
// console.log("Alhamdulillah I got " + myTaka + " Taka")
// --------------------------------------------
function mySavings(salary, tution){
    var totalEarnings = salary + tution;
    var houseRent = 4000;
    var netElec = 1000;
    var schoolFees = 900;
    var bazarKhoros = 10000;
    var totalCost = houseRent + netElec + schoolFees + bazarKhoros;
    var remainingMoney = totalEarnings - totalCost;
    return remainingMoney
}
var totalSavings = mySavings(15000, 9000)
console.log(totalSavings)