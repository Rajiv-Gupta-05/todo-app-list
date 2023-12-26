const Pool = require('pg').Pool
require('dotenv').config()
console.log(process.env.USERNAME);
const pool = new Pool({
    user: 'postgres',
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
})

module.exports = pool