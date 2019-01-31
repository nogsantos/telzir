const mongoose = require('mongoose');
const ListOfCode = require('./model');
/**
 * Telzir products
 */
class Product {
	/**
	 * Setup to products
	 *
	 * @param {Number} origin
	 * @param {Number} destiny
	 * @param {Number} timer
	 */
	constructor(origin, destiny, timer) {
		this.origin = origin;
		this.destiny = destiny;
		this.timer = timer;
	}

	/**
	 * Returns a pre-defined list with codes of oring, destiny and values
	 */
	listOfCode() {
		return [
			{ origin: 11, destiny: 16, price: 1.9 },
			{ origin: 16, destiny: 11, price: 2.9 },
			{ origin: 11, destiny: 17, price: 1.7 },
			{ origin: 17, destiny: 11, price: 2.7 },
			{ origin: 11, destiny: 18, price: 0.9 },
			{ origin: 18, destiny: 11, price: 1.9 }
		];
	}

	/**
	 *
	 */
	static list() {
		if (mongoose.connection.readyState) {
			return Promise.resolve(
				ListOfCode.find({}).then(codes => {
					// console.log('codes', codes);
					return codes;
				})
			);
		}
	}

	/**
	 * Populate data
	 */
	populate() {
		let codes = [
			new ListOfCode({ origin: 11, destiny: 16, price: 1.9 }),
			new ListOfCode({ origin: 16, destiny: 11, price: 2.9 }),
			new ListOfCode({ origin: 11, destiny: 17, price: 1.7 }),
			new ListOfCode({ origin: 17, destiny: 11, price: 2.7 }),
			new ListOfCode({ origin: 11, destiny: 18, price: 0.9 }),
			new ListOfCode({ origin: 18, destiny: 11, price: 1.9 })
		];
		return ListOfCode.insertMany(codes)
			.then(documents => {
				console.log(documents, 'Success');
			})
			.catch(err => {
				console.error(err);
			});
	}
}
module.exports = Product;
