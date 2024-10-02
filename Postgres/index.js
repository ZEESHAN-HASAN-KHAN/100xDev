const express = require('express');
const app = express();
app.use(express.json());

const { Client } = require('pg');

const client = new Client({
    connectionString:"postgresql://neondb_owner:z6cJitL1oHgB@ep-proud-flower-a5cbhqyz.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
// Creating a Employee Table in your database
async function createEmployeeTable()
{
    await client.connect();
    const result = await client.query(`
        
        CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`)
}
createEmployeeTable();
app.listen(3000, () => {
    console.log('App is running on 3000');

})