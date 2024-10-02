var user = {
    firstName: "Harkirat",
    lastName: "singh",
    email: "email@gmail.com",
    age: 21
};
function isLegal(user) {
    if (user.age > 18) {
        console.log('Age is Legal');
    }
    else {
        console.log('Age is not legal');
    }
}
isLegal(user);
var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    Employee.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name, " your age is ").concat(this.age));
    };
    return Employee;
}());
var obj = new Employee('zeeshan', 1);
obj.greet('Welcome');
