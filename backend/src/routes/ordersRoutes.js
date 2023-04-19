const express = require('express');
const router = express.Router();

//ROUTER PARA ADICIONAR ENCOMENDA (AddOrder)

//ROUTER PARA LISTAR ENCOMENDAS  (listOrders) 
router.get('/list', (req, res) => {
    let query = "SELECT * FROM orders";
    if (req.query.showDeleted != "1") {
        query += ' WHERE deleted_at IS NULL';
    }
    req.connection.query(query, (error, result) => {
        if (error) {
            res.status(404).send(error);
        } else {
            res.send(result);
        }
    });
})
router.get('/list/:id', (req, res) => {
    let query = `SELECT * FROM orders WHERE id=${req.params.id}`;
    if (req.query.showDeleted != "1") {
        query += ' AND deleted_at IS NULL';
    }
    req.connection.query(query, (error, result) => {
        if (error) {
            res.status(404).send(error);
        } else {
            res.send(result);
        }
    });
})
//ROUTER PARA PESQUISAR ENCOMENDAS (searchOrders)

//ROUTER PARA ORDENAR ENCOMENDAS (orderOrders)
router.get('/ascname', (req, res) => {
    let query = `SELECT * FROM orders`
    if (req.query.showDeleted != "1") {
        query += ` WHERE deleted_at IS NULL ORDER BY name ASC`
    }
    req.connection.query(query, (error, result) => {
        if (error) {
            res.status(404).send();
            console.log(error);
        } else {
            res.send(result);
            console.log(query);
        }
    })
})

router.get('/descname', (req, res) => {
    let query = `SELECT * FROM orders`
    if (req.query.showDeleted != "1") {
        query += ` WHERE deleted_at IS NULL ORDER BY name DESC`
    }
    req.connection.query(query, (error, result) => {
        if (error) {
            res.status(404).send();
            console.log(error);
        } else {
            res.send(result);
            console.log(query);
        }
    })
})

//ROUTER PARA ALTERAR STATUS DA ENCOMENDA (changeOrdersStatus) 


module.exports = router;