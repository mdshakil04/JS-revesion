var tomatoPrice = 25;
// tomatoPrice = 30;

var newTomatoPrice = tomatoPrice + 10;
// console.log(newTomatoPrice)
var price1 = "12"; var price2 = 10;
var realPrice = parseInt(price1)
var totalPrice = realPrice + price2;
console.log(totalPrice)
// -----------------

/*
var = Declares a variable
let = Declares a block variable
const = Declares a block constant
if = Marks a block of statements to be executed on a condition
switch = Marks a block of statements to be executed in different cases
for = Marks a block of statements to be executed in a loop
function = Declares a function
return = Exits a function
try = Implements error handling to a block of statements
*/

/*
Always use const if the value should not be changed
Always use const if the type should not be changed(Array and Objects)
Only use let if you can not use const
Only use var if you MUST support old browsers.
*/ 

/*
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/

// Difference Between var, let, const
/**
 * let and const have block scope
 * let and const can not be redeclared
 * let and const must be declared before use
 * let and const does not bind to this
 * let and const are not hoisted
 */