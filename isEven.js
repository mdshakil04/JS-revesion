function evenNumberCheck (number){
    const isEven = number % 2;
    if(isEven == 0){
        // console.log("The given Number is Even Number")
        return true
    }
    else{
        // console.log("The given number is not Even number")
        return false
    }
}
const myNumber = evenNumberCheck(120);
console.log(myNumber)