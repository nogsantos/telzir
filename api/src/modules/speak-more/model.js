const mongoose = require('mongoose');
/**
 * Model Speak more promo
 */
const schema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	timer: {
		type: Number,
		required: true
	},
	percent_amount_addition: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('SpeakMorePlan', schema);
