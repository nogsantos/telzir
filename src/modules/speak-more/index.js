const Product = require('../product');

/**
 * SpeakMore class
 */
class SpeakMore extends Product {
	/**
	 *
	 */
	constructor(origin, destiny, timer) {
		super(origin, destiny, timer);
	}

	/**
	 * Call cost per minut
	 */
	cost() {}

	/**
	 *
	 */
	get plan() {
		return [
			{ code: 1, title: 'FaleMais 30', timer: 30 },
			{ code: 2, title: 'FaleMais 60', timer: 60 },
			{ code: 3, title: 'FaleMais 120', timer: 120 }
		];
	}
}

module.exports = SpeakMore;
