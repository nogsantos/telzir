const express = require('express');
const router = express.Router();

const product = require('@modules/product/controller');

router.get('/', product.list);
router.get('/:origin/:destiny', product.getPrice);
router.get('/setup', product.setup);

module.exports = router;
