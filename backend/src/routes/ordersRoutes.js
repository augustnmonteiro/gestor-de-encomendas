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

router.put('/put/:id', (req, res) => {
})
router.delete('/delete/:id', (req, res) => {
})

//ROUTER PARA ADICIONAR ENCOMENDA (AddOrder)
router.post('/', (req, res) => {
    const { name, cod_order, weight, height, width, depth, shelf, bookcase, status } = req.body;
    let query = `INSERT INTO orders (name, cod_order, weight, height, width, depth, shelf, bookcase, status)`;
    if (name !== "" && cod_order && weight > 0 && height > 0 &&
        width > 0 && depth > 0 && shelf > 0 && bookcase > 0 &&
        (status === "WAITING" || status === "OUT_FOR_DELIVERY" || status === "DELIVERED")) {
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
router.get('/', (req, res) => {
    let query = `SELECT * FROM orders`;
    if (req.query.showDeleted != "1") {
        query += ` WHERE deleted_at IS NULL`; 
    }
    if(req.query.order == 'asc'){
        query += ` ORDER BY name ASC`
    }else if(req.query.order == 'desc'){
        query += ` ORDER BY name DESC`
    }
    req.connection.query(query, (error, result) => {
        if (error) {
            res.status(404).send();
            console.log(query);
        } else {
            res.send(result);
        }
    })
})

//ROUTER PARA ALTERAR STATUS DA ENCOMENDA (changeOrdersStatus) 
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

module.exports = router;