// let num1 = 10;
// let num2 = 15;

// function sum(){
//     return num1 + num2;
// }
// console.dir(sum)
const sum = () =>{
    let num = 0;
    console.log(num , "Console from outer function");
    return () =>{
        num += 1;
        console.log(num, "Console log from inner function");
    };
   
};
const result = sum();
result()
result()
result()
result()
result()
console.dir(result)
// console.log(result())
