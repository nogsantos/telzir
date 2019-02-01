const mongoose = require('mongoose');
const constants = require('@config/constants.js');
const CodeList = require('@modules/product/model.js');
/**
 * Telzir products
 */
class Product {
	/**
	 * Setup to products
	 *
	 * @param {Number} origin
	 * @param {Number} destiny
	 */
	constructor({ origin, destiny }) {
		this.origin = origin;
		this.destiny = destiny;
	}

	/**
	 * Get product price by fields
	 */
	getPrice() {
		return new Promise((resolve, reject) => {
			if (this.isValid() && this.hasConnection()) {
				resolve(
					CodeList.find({ origin: this.origin, destiny: this.destiny })
						.select('-_id -origin -destiny -__v')
						.then(codes => codes)
						.catch(err => err)
				);
			}
			reject(constants.required_fields(['origin', 'destiny']).message);
		});
	}

	/**
	 * Return a list of
	 */
	list() {
		return new Promise((resolve, reject) => {
			if (this.hasConnection()) {
				resolve(
					CodeList.find({})
						.select('-_id -__v')
						.then(codes => codes)
						.catch(err => err)
				);
			}
			reject(constants.db_connect_error().message);
		});
	}

	/**
	 * Mock default values
	 */
	getDefaultProductList() {
		return constants.default_produt_list();
	}

	/**
	 * Populate default data
	 */
	setup() {
		return new Promise((resolve, reject) => {
			if (this.hasConnection()) {
				let codes = [];
				this.getDefaultProductList().forEach(list => {
					codes.push(new CodeList(list));
				});
				resolve(
					CodeList.insertMany(codes)
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
		return this.origin !== null || this.destiny !== null;
	}

	/**
	 * Validate if has connection
	 */
	hasConnection() {
		return mongoose.connection.readyState === 1;
	}
}
module.exports = Product;
