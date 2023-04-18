const express = require('express');
const router = express.Router();


//Metodos (demonstração)
router.get('/list', (req, res) => {
})
router.get('/list/:id', (req, res) => {
})
router.post('/post', (req, res) => {
})

router.put('/put/:id', (req, res) => {
    const newstatus = req.body.status;
    let query = `UPDATE orders SET status='${newstatus}' WHERE id='${req.params.id}'`;
    if (newstatus) {
        //ATUALIZAR NO BANCO
        req.connection.query(query, (error, result) => {
                if (error) {
                    res.status(500).send("SERVER ERROR");
                } else {
                    res.status(201).send("UPDATED");
                }
            });
    } else {
        res.status(400).send("BAD REQUEST");
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