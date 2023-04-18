const express = require('express');
const router = express.Router();


router.get('/sum', (req, res) => {
    let query = "SELECT SUM(weight) FROM orders";
    if (req.query.showDeleted != "1") {
      query += ' WHERE deleted_at IS NULL';
    }
    req.connection.query(query, (error, result) => {
      if (error) {
        res.status(404).send();
      } else {
        res.send(result);
      }
    });
  })
  
router.get('/count', (req, res) => {
  let query = "SELECT COUNT(id) FROM orders";
  if (req.query.showDeleted != "1") {
    query += ' WHERE deleted_at IS NULL';
  } 
  req.connection.query(query, (error, result) => {
    if (error) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  });
})
router.get('/groupBy', (req, res) => {
  let query = "SELECT status, count(id) as number_status FROM orders GROUP BY status";
  
  req.connection.query(query, (error, result) => {
    if (req.query.showDeleted != "1") {
      query += ' WHERE deleted_at IS NULL';
    } 
    if (error) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  });
})

module.exports = router;