function multiflicationOfNumber(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i
    }
    return result;
}
const result = multiflicationOfNumber(5);
console.log(result)