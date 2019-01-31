const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require('@models/Book');
const Product = require('@modules/product');

const indexTemplate = require('@views/index.marko');

/**
 * Index route
 */
router.get('/', (req, res) => {
	if (mongoose.connection.readyState) {
		Book.find({}).then(books => {
			res.marko(indexTemplate, { books: books });
		});
	} else {
		res.marko(indexTemplate);
	}
});

router.get('/setup', (req, res) => {
	const prod = new Product();
	prod.populate();
	res.marko(indexTemplate, { populate: true });
});

module.exports = router;
