const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json())
const port = 3001;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'gestao_de_encomendas'
});

app.get('/orders', (request, response) => {
  });

app.post('/orders', (request, response) => {
});

app.put('/orders', (request, response) => {
});

app.delete('/orders', (request, response) => {
});

app.listen(port, () => {
    console.log("Servidor rodando!");
  });