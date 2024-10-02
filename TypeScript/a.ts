let x: number = 101;
// x = 'harkirat';
console.log(x);

function greet(firstName: string) {
    console.log("Hello" + firstName);
}

greet('harkirat');

function sum(a: number, b: number) {
    console.log(a + b);
    return a + b;

}
sum(1, 2);

// function isLegal(age: number) {
//     return age >= 18 ? true : false;
// }
// isLegal(24);

function takeFunctionInput(fn: (a: number, b: number) => number, a: number, b: number) {
    setTimeout(() => fn(a, b), 1000);
}

takeFunctionInput(sum, 1, 2);