'use strict'

const mysql = require('mysql')

//koneksi
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "laundry3"
})

module.exports = db;