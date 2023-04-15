const express = require('express');
const router = express.Router();

//LISTAR TODOS (COM VERIFICAÇÃO SE FOI DELETADO)
router.get('/list', (req, res) => {
    let query = "SELECT * FROM orders";
    if (req.query.showDeleted != "1") {
        query += ' WHERE deleted_at IS NULL';
    }
    req.connect.query(query, (error, result) => {
        if (error) {
            res.status(404).send(error);
        } else {
            res.send(result);
        }
    });
});
//LISTAR POR ID (COM VERIFICAÇÃO SE FOI DELETADO)
router.get('/list/:id', (req, res) => {
    let query = `SELECT * FROM orders WHERE id=${req.params.id}`;
    if (req.query.showDeleted != "1") {
        query += ' AND deleted_at IS NULL';
    }
    req.connect.query(query, (error, result) => {
        if (error) {
            res.status(404).send(error);
        } else {
            res.send(result);
        }
    });
});

router.post('/post', (req, res) => {
})
router.put('/put/:id', (req, res) => {
})
router.delete('/delete/:id', (req, res) => {
})

//ROUTER PARA ADICIONAR ENCOMENDA (AddOrder)

//ROUTER PARA LISTAR ENCOMENDAS  (listOrders) 

//ROUTER PARA PESQUISAR ENCOMENDAS (searchOrders)

//ROUTER PARA ORDENAR ENCOMENDAS (orderOrders)

//ROUTER PARA ALTERAR STATUS DA ENCOMENDA (changeOrdersStatus) 


module.exports = router;