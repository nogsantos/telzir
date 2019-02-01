const Product = require('./');
/**
 * Get a list of products
 */
exports.list = (req, res) => {
	const product = new Product({});
	product.list().then(
		list => {
			res.json(list);
		},
		err => {
			res.status(400).jsonp({ error: 'message' });
		}
	);
};
/**
 * Find a product price
 *
 * @param origin
 * @param destiny
 */
exports.getPrice = (req, res) => {
	const product = new Product(req.params);
	product.getPrice().then(
		list => {
			res.json(list);
		},
		err => {
			res.status(400).jsonp({ error: err });
		}
	);
};
/**
 * Setting up product list
 */
exports.setup = (req, res) => {
	const product = new Product({});
	product.setup().then(
		success => {
			res.json(success);
		},
		err => {
			res.status(500).jsonp({ error: 'message' });
		}
	);
};
