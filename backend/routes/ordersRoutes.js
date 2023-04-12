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
})
router.delete('/delete/:id', (req, res) => {
})

//ROUTER PARA ADICIONAR ENCOMENDA (AddOrder)

//ROUTER PARA LISTAR ENCOMENDAS  (listOrders) 

//ROUTER PARA PESQUISAR ENCOMENDAS (searchOrders)

//ROUTER PARA ORDENAR ENCOMENDAS (orderOrders)

//ROUTER PARA ALTERAR STATUS DA ENCOMENDA (changeOrdersStatus) 


module.exports = router;