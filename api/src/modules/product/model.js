const mongoose = require('mongoose');
/**
 * Model for products
 */
const schema = mongoose.Schema({
	origin: {
		type: Number,
		required: true
	},
	destiny: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});
module.exports = mongoose.model('CodeList', schema);
