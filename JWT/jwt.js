const jwt = require('jsonwebtoken');

const value = {
    name: "harkirat",
    account:12456
}

const token = jwt.sign(value, "Secret");

console.log(token);