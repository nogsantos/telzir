const express = require('express');
const router = express.Router();

const product = require('@modules/product/controller');

router.get('/', product.list);

module.exports = router;
