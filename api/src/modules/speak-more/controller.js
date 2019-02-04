const SpeakMore = require('./');

/**
 * Get a list of products form Speak More promotion
 */
exports.list = (req, res) => {
	const product = new SpeakMore({});
	product.list().then(
		list => {
			res.json(list);
		},
		err => {
			res.status(400).jsonp({ error: err });
		}
	);
};

/**
 * Setting up product form Speak More promotion
 */
exports.setup = (req, res) => {
	const product = new SpeakMore({});
	product.setup().then(
		success => {
			res.json(success);
		},
		err => {
			res.status(500).jsonp({ error: err });
		}
	);
};

/**
 * Returns calculated value
 */
exports.calculate = (req, res) => {
	const preDefined = new SpeakMore(req.params);
	preDefined.cost().then(
		value => {
			res.json(value);
		},
		err => {
			res.status(400).jsonp({ error: err });
		}
	);
};
