const Product = require('../product');
/**
 * Pre-defined plans
 */
class PreDefined extends Product {
	/**
	 * Constructor
	 *
	 * @param {Number} origin
	 * @param {Number} destiny
	 * @param {Number} timer
	 */
	constructor(origin, destiny, timer) {
		super(origin, destiny, timer);
	}

	/**
	 * Call cost per minut
	 */
	cost() {
		const list = this.listOfCode();
		let listOfOrigin = [];
		list.forEach(tax => {
			if (tax.origin === this.origin) {
				listOfOrigin.push(tax);
				// console.log('origin', listOfOrigin);
			}
		});

		let priceValue = 0;
		listOfOrigin.forEach(list => {
			if (list.destiny === this.destiny) {
				priceValue = list.price;
				// console.log('price', priceValue);
			}
		});
		return this.timer * priceValue;
	}
}

module.exports = PreDefined;
