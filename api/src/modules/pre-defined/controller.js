const PreDefined = require('./');

exports.calculate = (req, res) => {
	const preDefined = new PreDefined(req.params);
	preDefined.cost().then(
		value => {
			console.log('p', value);
			res.json(value);
		},
		err => {
			res.status(400).jsonp({ error: 'message' });
		}
	);
};
