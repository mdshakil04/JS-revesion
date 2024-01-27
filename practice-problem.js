// JS Problem solving ...Practice problem 1
/**
 * Find the index of 'Banana' and replace "banana" with "Mango".
 * Remove "Orange" and add "Watermelon"
 */
var fruits = ["Apple", "Banana", "Orange"];
var fruitIndex = fruits.indexOf("Banana")
fruits[1] = "Mango"
fruits.pop()
fruits.push("Watermelon")
console.log(fruits)
console.log(fruitIndex)
// JS Problem solving ...Practice problem 2
/**
 * You and your friends Tim, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total is 66, Jane's total is 95, Peter's total is 56 and John's total is 40. The grading chatrs is
 * 80 or above A grade
 * 60 or above B grade
 * 50 or above C grade
 * 40 or above D grade
 * Write a program to find your and your friends grades using if-else.
 */
var myScore = 85;
var tomScore = 66;
var janeScore = 96;
var peterScore = 56;
var johnScore = 40;

if (myScore >= 80) {
    console.log("I obtain A grade");
} else if (myScore >= 60) {
    console.log("I obtain B grade");
} else if (myScore >= 50) {
    console.log("I obtain C grade");
} else if (myScore >= 40) {
    console.log("I obtain D grade");
} else {
    console.log("Oh no! I failed");
}

if (tomScore >= 80) {
    console.log("Tom obtains A grade");
} else if (tomScore >= 60) {
    console.log("Tom obtains B grade");
} else if (tomScore >= 50) {
    console.log("Tom obtains C grade");
} else if (tomScore >= 40) {
    console.log("Tom obtains D grade");
} else {
    console.log("Tom failed");
}