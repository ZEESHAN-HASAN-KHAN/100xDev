//Generics are the language independent Concepts
// exists in C++ as well
function getFirstElement(arr) {
    return arr[0];
}
var el = getFirstElement([1, 2, 4, '3']);
console.log(el);
// Problem in this approach is User
// can send different types of Values in
// input without any type error
// TypeScript isn't able to infer the right type of return type
var el1 = getFirstElement(['Zeeshan', 'Hasan', 'Khan']);
// console.log(el1.toLowerCase())
// Here Comes the Solution
// Generics
// It enable you to create components that work data
// type while still providing compile time safety
function identity(arg) {
    return arg;
}
var output1 = identity('myString');
var output2 = identity(100);
// Solution to original Problem
function getFirstElement1(arr) {
    return arr[0];
}
var el2 = getFirstElement1(["Zeeashan", "Hasan "]);
console.log(el2.toLowerCase());
