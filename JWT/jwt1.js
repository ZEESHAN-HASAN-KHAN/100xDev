const jwt = require('jsonwebtoken');
const jwtPassword = 'Secret';

const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
function signjwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success)
    {
        return null;
    }
    const signature = jwt.sign({ username }, jwtPassword);
    return signature;
}

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    }
    else 
    {
        return false;
        }
}


function verifyJwt(token)
{
    // const verified = jwt.verify(token, jwtPassword)
    
    try {
        jwt.verify(token, jwtPassword);
        return true;
    }
    catch(e) {
        
    }
    return false;
}
const ans = signjwt("hah@gmail.com", 'cxsjcbxsjc');
console.log(ans);

console.log(decodeJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlplZXNoYW4iLCJpYXQiOjE3MjU2NDc3OTB9.mWkIPlntIguCpBdMyTxHtl6uBuIdtU2vAT4R1Ic4VrY'));
console.log(decodeJwt(ans));


console.log(verifyJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlplZXNoYW4iLCJpYXQiOjE3MjU2NDc3OTB9.mWkIPlntIguCpBdMyTxHtl6uBuIdtU2vAT4R1Ic4VrY'));
console.log(verifyJwt(ans));