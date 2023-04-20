const express = require('express');
const router = express.Router();

//Metodos (demonstração)
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

router.put('/put/:id', (req, res) => {
})
router.delete('/delete/:id', (req, res) => {
})

//ROUTER PARA ADICIONAR ENCOMENDA (AddOrder)
router.post('/add', (req, res) => {
    const { name, cod_order, weight, height, width, depth, shelf, bookcase, status } = req.body;
    let query = `INSERT INTO orders (name, cod_order, weight, height, width, depth, shelf, bookcase, status)`;

    if (name !== "" && cod_order && weight > 0 && height > 0 &&
        width > 0 && depth > 0 && shelf > 0 && bookcase > 0 &&
        (status === "Aguardando" || status === "Saiu para entrega" || status === "Entregue")) {
        query += ` VALUES ('${name}', ${cod_order}, ${weight}, ${height}, ${width},
         ${depth}, ${shelf}, ${bookcase}, '${status}')`;

        req.connection.query(query, (error, result) => {
            if (error) {
                res.status(404).send();
            } else {
                res.send("Created");
            }
        })

    } else {
        res.status(400)
        res.send('Bad Request')

    }
})


//ROUTER PARA LISTAR ENCOMENDAS  (listOrders) 

//ROUTER PARA PESQUISAR ENCOMENDAS (searchOrders)

//ROUTER PARA ORDENAR ENCOMENDAS (orderOrders)

//ROUTER PARA ALTERAR STATUS DA ENCOMENDA (changeOrdersStatus) 


module.exports = router;