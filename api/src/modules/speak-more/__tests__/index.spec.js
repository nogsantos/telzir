const SpeakMore = require('../');
/**
 * Must test index marko
 */
describe('SpeakMore', () => {
	it('Should reject to return a list when has no connection', () => {
		const product = new SpeakMore({});
		product.list().catch(e => {
			expect(e).toBe('No database connection');
		});
	});

	it('Should returns a list of code with default values', () => {
		const product = new SpeakMore({});
		let list = product.getDefaultPlanList();
		expect(list.length).not.toBeNull();
		expect(list[0].title).toBe('FaleMais 30');
		expect(list[0].timer).toBe(30);
		expect(list[0].percent_amount_addition).toBe(10);
	});

	it('Should reject to populate database when has no connection', () => {
		const product = new SpeakMore({});
		product.cost().catch(e => {
			expect(e).toBe('Field(s)  origin , destiny , time , plan  values can not be empty');
		});
	});

	it('Should calculates when valid number are passed and the timer is less then plan timer', () => {
		const test = new SpeakMore({ origin: 11, destiny: 16, timer: 20, plan: 30 });
		expect(test.calculate(1.9)).toBe(0);
	});

	it('Should calculates when valid number are passed and the timer is bigger then plan timer [plan 60]', () => {
		const test = new SpeakMore({ origin: 11, destiny: 17, timer: 80, plan: 60 });
		expect(Number(test.calculate(1.7).toFixed(1))).toBe(37.4);
	});

	it('Should calculates when valid number are passed and the timer is bigger then plan timer [plan 120]', () => {
		const test = new SpeakMore({ origin: 18, destiny: 11, timer: 200, plan: 120 });
		expect(Number(test.calculate(1.9).toFixed(1))).toBe(167.2);
	});

	it('Should reject to populate database when has no connection', () => {
		const product = new SpeakMore({});
		product.setup().catch(e => {
			expect(e).toBe('No database connection');
		});
	});

	it('Should test if is valid when all required values are valid', () => {
		const product = new SpeakMore({ origin: 11, destiny: 16, timer: 20, plan: 30 });
		expect(product.isValid()).toBeTruthy();
	});

	it('Should test if is not valid when some of required values are invalid', () => {
		const product = new SpeakMore({ origin: 11, destiny: 16, timer: 20 });
		expect(product.isValid()).toBeFalsy();
	});

	it('Should test if is not valid when all of required values are invalid', () => {
		const product = new SpeakMore({});
		expect(product.isValid()).toBeFalsy();
	});

	it('Should returns false when has no database connection', () => {
		const product = new SpeakMore({});
		expect(product.hasConnection()).toBeFalsy();
	});
});
