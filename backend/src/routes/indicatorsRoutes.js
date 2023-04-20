const express = require('express');
const router = express.Router();


router.get('/total-weight', (req, res) => {
    let query = "SELECT SUM(weight) as total FROM orders";
    req.connection.query(query, (error, result) => {
      if (error) {
        res.status(404).send();
      } else {
        res.send(result);
      }
    });
  })
  
router.get('/total-orders', (req, res) => {
  let query = "SELECT COUNT(id) as total FROM orders";
  req.connection.query(query, (error, result) => {
    if (error) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  });
})
router.get('/total-orders-by-status', (req, res) => {
  let query = "SELECT status, count(id) as total FROM orders GROUP BY status";
  
  req.connection.query(query, (error, result) => {
    if (error) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  });
})

module.exports = router;