// interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     age: number;
// }
// const user = {
//     firstName: "Harkirat",
//     lastName: "singh",
//     email: "email@gmail.com",
//     age: 21
// }
// function isLegal(user: User) {
//     if (user.age > 18) {
//         console.log('Age is Legal');
//     }
//     else {
//         console.log('Age is not legal');
//     }
// }
// isLegal(user);
// //Implemeneting Interfaces as a class

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
// class Employee implements Person {
//     name: string;
//     age: number;
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name} your age is ${this.age}`);
//     }
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }
// var obj = new Employee('zeeshan', 1);
// obj.greet('Welcome');

// // Summary
// // you can use interfaces to aggreagate data
// // you can use interface to implement classes from
