const PreDefined = require('./');
/**
 * Return calculated value
 */
exports.calculate = (req, res) => {
	const preDefined = new PreDefined(req.params);
	preDefined.cost().then(
		value => {
			res.json(value);
		},
		err => {
			res.status(400).jsonp({ error: err });
		}
	);
};
