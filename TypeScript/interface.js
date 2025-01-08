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
function greet(user) {
    console.log("Hello ".concat(user.name, " your age is ").concat(user.age, " and you live in ").concat(user.address.streetName, " ").concat(user.address.country));
}
greet({ firstName: 'Harkirat', lastName: 'Singh', name: 'Harkirat', age: 21, address: { streetName: '123', country: 'India' } });
