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
    if(req.body.status == "saiu" || req.body.status == "aguardando" || req.body.status == "entregue"){
    let newstatus = req.body.status;
    let query = `UPDATE orders SET status='${newstatus}' WHERE id='${req.params.id}' AND  deleted_at IS NULL`;
    
        //ATUALIZAR NO BANCO
        req.connection.query(query, (error, result) => {
                if (error) {
                    res.status(500).send("SERVER ERROR");
                } else {
                    res.status(201).send("UPDATED");
                }
            });
    } else {
        res.status(400).send("NÂO EXISTE ESSE STATUS DISPONIVEL");
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