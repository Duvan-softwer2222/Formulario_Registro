const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'usuario'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL!');
});

const user = { username: 'juan', email: 'juan@example.com', password: 'contraseña' };
const query = connection.query('INSERT INTO usuarios SET ?', user, (err, result) => {
  if (err) throw err;
  console.log(result.insertId);
});
