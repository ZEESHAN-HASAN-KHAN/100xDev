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

// function greet(user: {
//     name: string, age: number, address: {
//         streetName: string,
//         country: string
// }})
// {
//     console.log(`Hello ${user.name} your age is ${user.age} and you live in ${user.address.streetName} ${user.address.country}`);
// }
// greet({ name: 'Harkirat', age: 21, address: { streetName: '123', country: 'India' } });
// let anotherUser = {
//     name: 'Harkirat',
//     age: 21,
//     address: {
//         streetName: '123',
//         country: 'India'
//     }
// }
// greet(anotherUser);

//We are repeating the same type of object again and again
//To avoid this we can use interfaces

interface User {
    firstName: string;
    lastName: string;
    name: string;
    age: number;
    address: {
        streetName: string;
        country: string;
    }
}
function greet(user: User) {
    console.log(`Hello ${user.name} your age is ${user.age} and you live in ${user.address.streetName} ${user.address.country}`);
}
greet({ firstName: 'Harkirat', lastName: 'Singh', name: 'Harkirat', age: 21, address: { streetName: '123', country: 'India' } });
