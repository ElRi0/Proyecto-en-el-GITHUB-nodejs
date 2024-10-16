const mysql = require('mysql2'); 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dbnode'
});

connection.connect((err) => {
    if (err) {
        console.log('Error al conectar:', err);
        return;
    } else {
        console.log('Conectado a la base de datos');
    }
});

module.exports = connection;