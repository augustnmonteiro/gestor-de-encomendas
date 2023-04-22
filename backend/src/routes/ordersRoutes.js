const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let query = "";
    if (req.query.type && req.query.busca) {
        if (["name", "cod_order", "weight", "shelf", "bookcase", "status"].includes(req.query.type)) {
            query = `SELECT * FROM orders WHERE ${req.query.type} like '%${req.query.busca}%' AND  deleted_at IS NULL`
            req.connection.query(query, (error, result) => {
                if (error) {
                    res.status(404).send(error);
                    res.send("erro no connection");
                } else {
                    res.send(result);
                }
            });
        }
    } else {
        query = "SELECT * FROM orders";
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
    }
})
router.get('/:id', (req, res) => {
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
});
router.put('/:id', (req, res) => {
    const newStatus = req.body.status;
    if (newStatus == "WAITING_TO_BE_SENT" || newStatus == "OUT_FOR_DELIVERY" || newStatus == "DELIVERED") {
        let query = `UPDATE orders SET status='${newStatus}' WHERE id='${req.params.id}' AND  deleted_at IS NULL`;
        //ATUALIZAR NO BANCO
        req.connection.query(query, (error, result) => {
            if (error) {
                res.status(500).send("SERVER ERROR");
            } else {
                res.status(200).send("UPDATED");
            }
        });
    } else {
        res.status(400).send("OPÇÃO DE STATUS INVÁLIDA");
    }
});
router.delete('/delete/:id', (req, res) => {
})

//ROUTER PARA ADICIONAR ENCOMENDA (AddOrder)

//ROUTER PARA LISTAR ENCOMENDAS  (listOrders) 

//ROUTER PARA PESQUISAR ENCOMENDAS (searchOrders)

//ROUTER PARA ORDENAR ENCOMENDAS (orderOrders)

//ROUTER PARA ALTERAR STATUS DA ENCOMENDA (changeOrdersStatus) 


module.exports = router;