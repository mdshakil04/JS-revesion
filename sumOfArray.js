function sumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        // const index = i;
        const element = numbers[i];
        sum = sum + element;
        console.log(element, sum)
    }
    return sum;
}
const myNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
sumOfArray(myNumbers);