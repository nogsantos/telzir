const Product = require('../product');
const constants = require('@config/constants.js');

/**
 * SpeakMore class
 */
class SpeakMore {
	/**
	 *
	 */
	constructor({ origin, destiny, timer, plan }) {
		this.origin = origin;
		this.destiny = destiny;
		this.timer = timer;
		this.plan = plan;
	}
	/**
	 * Call cost per minut
	 */
	cost() {}
	/**
	 *
	 */
	getDefaultPlanList() {
		return constants.default_product_list();
	}
}

module.exports = SpeakMore;
