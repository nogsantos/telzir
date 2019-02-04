const mongoose = require('mongoose');
const Product = require('@modules/product');
const constants = require('@config/constants.js');
const model = require('@modules/speak-more/model.js');
/**
 * SpeakMore class
 */
class SpeakMore {
	/**
	 * Class constructor
	 *
	 * @param {Object} param0
	 */
	constructor({ origin, destiny, timer, plan }) {
		this.origin = origin;
		this.destiny = destiny;
		this.timer = timer;
		this.plan = plan;
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
						.select('-__v')
						.then(response => response)
						.catch(err => err)
				);
			} else {
				reject(constants.db_connect_error().message);
			}
		});
	}

	/**
	 * Get default values
	 */
	getDefaultPlanList() {
		return constants.default_speakmore_list();
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
				reject(constants.required_fields([' origin ', ' destiny ', ' time ', ' plan ']).message);
			}
		});
	}

	/**
	 * Calculate values
	 *
	 * @param {Number} planPrice
	 */
	calculate(planPrice) {
		const timer = Number(this.timer);
		const plan = Number(this.plan);
		const price = Number(planPrice);
		if (timer <= plan) {
			return 0;
		} else {
			let timer_diff = timer - plan;
			return price * timer_diff * 1.1;
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
			this.timer !== undefined &&
			this.plan !== 'null' &&
			this.plan !== undefined
		);
	}

	/**
	 * Populate default data
	 */
	setup() {
		return new Promise((resolve, reject) => {
			if (this.hasConnection()) {
				let plans = [];
				this.getDefaultPlanList().forEach(list => {
					plans.push(new model(list));
				});
				resolve(
					model
						.insertMany(plans)
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
	 * Validate if has connection
	 */
	hasConnection() {
		return mongoose.connection.readyState === 1;
	}
}

module.exports = SpeakMore;
