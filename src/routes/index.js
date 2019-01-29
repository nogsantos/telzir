const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require('@models/Book');

/**
 * Index route
 */
router.get('/', (req, res) => {
	const indexTemplate = require('@views/index.marko');
	if (mongoose.connection.readyState) {
		Book.find({}).then(books => {
			res.marko(indexTemplate, { books: books });
		});
	} else {
		res.marko(indexTemplate);
	}
});

module.exports = router;
