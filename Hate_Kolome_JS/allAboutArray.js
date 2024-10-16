// for (var i = 0; i < 10; i++){
//     if(i === 8){
//         console.log(i + ' is skipped or break')
//         break;
//         // continue;
//     }
//     console.log(`it is now at:` + i)
// }
// Array 
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// for (let i = 0; i < days.length; i ++){
//     console.log(days[i])
// }
console.log(days);
// শেষের দিক থেকে কোন নতুন আইটেম অ্যাড করতে
days.push('rainydays')
// console.log(days);
// শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতে
days.unshift('SunnyDays')
// console.log(days);
// শুরুর দিক হতে কোনো আইটেম রিমুভ করতে
days.shift();
// console.log(days);
// শেষের দিক থেকে কোন আইটেম অ্যাড করতে
days.pop();
// console.log(days);
var removedDays = days.splice(3,2);
console.log(removedDays)
console.log(days)