const mongoose = require('mongoose');
/**
 * Model Speak more promo
 */
const dbPlan = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	time: {
		type: Number,
		required: true,
	}
});

module.exports = mongoose.model('Plan', dbPlan);
