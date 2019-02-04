const mongoose = require('mongoose');
/**
 * Model for Briefing
 */
const schema = mongoose.Schema({
	ref_id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});
module.exports = mongoose.model('Briefing', schema);
