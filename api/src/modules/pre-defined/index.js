const constants = require('@config/constants.js');
const Product = require('@modules/product');
/**
 * Pre-defined plans
 */
class PreDefined {
	/**
	 * Constructor
	 *
	 * @param {Number} origin
	 * @param {Number} destiny
	 * @param {Number} timer
	 */
	constructor({ origin, destiny, timer }) {
		this.origin = origin;
		this.destiny = destiny;
		this.timer = timer;
	}

	/**
	 * Call cost per minut
	 */
	cost() {
		return new Promise((resolve, reject) => {
			if (this.isValid()) {
				const product = new Product({ origin: this.origin, destiny: this.destiny });
				product.getPrice().then(value => {
					if (value === null || value.length === 0) {
						resolve(value);
					} else {
						resolve(this.calculate(value[0].price));
					}
				});
			} else {
				reject(constants.required_fields([' origin ', ' destiny ', ' time ']).message);
			}
		});
	}

	/**
	 * Calculate values
	 *
	 * @param {Number} value
	 */
	calculate(value) {
		if (value && this.timer) {
			return Number(value) * Number(this.timer);
		} else {
			return null;
		}
	}

	/**
	 * Validate fields before query
	 */
	isValid() {
		return (
			this.origin !== 'null' &&
			this.origin !== undefined &&
			this.destiny !== 'null' &&
			this.destiny !== undefined &&
			this.timer !== 'null' &&
			this.timer !== undefined
		);
	}

	/**
	 * Mock cost
	 */
	costMock() {
		const list = constants.default_product_list();
		let listOfOrigin = list.filter(tax => tax.origin === this.origin && tax.destiny === this.destiny);
		if (listOfOrigin.length > 0) {
			return this.calculate(listOfOrigin[0].price);
		} else {
			return null;
		}
	}
}

module.exports = PreDefined;
