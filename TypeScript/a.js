var x = 101;
// x = 'harkirat';
console.log(x);
function greet(firstName) {
    console.log("Hello" + firstName);
}
greet('harkirat');
function sum(a, b) {
    console.log(a + b);
    return a + b;
}
sum(1, 2);
function isLegal(age) {
    return age >= 18 ? true : false;
}
console.log(isLegal(20));
// function takeFunctionInput(fn: (a: number, b: number) => number, a: number, b: number) {
//     setTimeout(() => fn(a, b), 1000);
// }
// takeFunctionInput(sum, 1, 2);
