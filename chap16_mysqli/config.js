const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'nodejsdemo'
});

// conn.connect(function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Connection established');
// }
// );

module.exports = conn;