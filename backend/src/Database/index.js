const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestao_de_encomendas'
});

/* export default connection; */
module.exports = connection