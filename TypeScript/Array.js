//Array in TS
// If you want to access arrays in Typescript
// it is as simple as adding a [] annotation next to the type
var a = [7, 1, 2, 3, 4, 5, 6];
var ans = -1;
for (var i = 0; i < a.length; i++) {
    if (a[i] > ans) {
        ans = a[i];
    }
}
console.log("Maximum Value in the array is ".concat(ans));
var user = [{
        firstName: "Zeeshan",
        lastName: "Khan",
        age: 10
    },
    {
        firstName: "Hasan",
        lastName: "Khan",
        age: 20
    }
];
console.log(user.filter(function (val) {
    return val.age >= 18;
}));
// console.log(user);
