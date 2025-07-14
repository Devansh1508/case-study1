const express = require('express');
const router = express.Router();

const { handleOrder } = require('../controllers/handleOrder');
// create order 
router.post('/handleOrder', handleOrder);

module.exports = router;