const mysql = require('mysql2');

const connect_to_db = () => {
    let con = mysql.createConnection({
        multipleStatements:true,
        host: "localhost",
        user: "root",
        password: "Haroon-2003",
        database: "meat_masters"
    });
    return con;
}

module.exports = connect_to_db;