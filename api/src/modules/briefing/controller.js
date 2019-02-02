const Briefing = require('./');
/**
 * List all
 */
exports.list = (req, res) => {
	const briefing = new Briefing({});
	briefing.list().then(
		list => {
			res.json(list);
		},
		err => {
			res.status(400).jsonp({ error: err });
		}
	);
};

/**
 * Get by reference
 */
exports.byreference = (req, res) => {
	const briefing = new Briefing(req.params);
	briefing.getByReference().then(
		list => {
			res.json(list);
		},
		err => {
			res.status(400).jsonp({ error: err });
		}
	);
};

/**
 * Setting up Briefing list
 */
exports.setup = (req, res) => {
	const briefing = new Briefing({});
	briefing.setup().then(
		success => {
			res.json(success);
		},
		err => {
			res.status(500).jsonp({ error: err });
		}
	);
};
