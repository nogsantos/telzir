const mongoose = require('mongoose');
const constants = require('@config/constants.js');
const model = require('@modules/briefing/model.js');
/**
 * Telzir Briefing
 */
class Briefing {
	/**
	 * Setup to Briefing
	 *
	 * @param {String} ref_id
	 */
	constructor({ ref_id }) {
		this.ref_id = ref_id;
	}
	/**
	 * Return a list of
	 */
	list() {
		return new Promise((resolve, reject) => {
			if (this.hasConnection()) {
				resolve(
					model
						.find({})
						.select('-_id -__v')
						.then(codes => codes)
						.catch(err => err)
				);
			}
			reject(constants.db_connect_error().message);
		});
	}

	/**
	 * Get brifing by reference
	 */
	getByReference() {
		return new Promise((resolve, reject) => {
			if (this.isValid() && this.hasConnection()) {
				resolve(
					model
						.find({ ref_id: this.ref_id })
						.select('-_id -ref_id -__v')
						.then(response => response)
						.catch(err => err)
				);
			}
			reject(constants.required_fields(['ref_id']).message);
		});
	}

	/**
	 * Populate default data
	 */
	setup() {
		return new Promise((resolve, reject) => {
			if (this.hasConnection()) {
				const defaults = constants.default_briefing();
				resolve(
					model
						.insertMany(defaults)
						.then(documents => {
							console.log(documents);
							return documents;
						})
						.catch(err => {
							console.error(err);
							return err;
						})
				);
			}
			reject(constants.db_connect_error().message);
		});
	}

	/**
	 * Validate fields before query
	 */
	isValid() {
		return this.ref_id !== null;
	}

	/**
	 * Validate if has connection
	 */
	hasConnection() {
		return mongoose.connection.readyState === 1;
	}
}
module.exports = Briefing;
