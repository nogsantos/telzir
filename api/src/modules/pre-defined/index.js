const Product = require('../product');
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
		const product = new Product({ origin: this.origin, destiny: this.destiny });
		return product.getPrice().then(value => {
			return value[0].price * this.timer;
		});

		// const list = this.getDefaultProductList();
		// let listOfOrigin = [];
		// list.forEach(tax => {
		// 	if (tax.origin === this.origin) {
		// 		listOfOrigin.push(tax);
		// 		// console.log('origin', listOfOrigin);
		// 	}
		// });

		// let priceValue = 0;
		// listOfOrigin.forEach(list => {
		// 	if (list.destiny === this.destiny) {
		// 		priceValue = list.price;
		// 		// console.log('price', priceValue);
		// 	}
		// });
		// return this.timer * priceValue;
	}
}

module.exports = PreDefined;
