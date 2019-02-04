const PreDefined = require('../');
/**
 * Must test pre-defined class
 *
 * @todo Mock product
 */
describe('Pre-defined', () => {
	it('Should caculate the cost call by list of codes when values are on the list [line 1]', () => {
		const first = new PreDefined({ origin: 11, destiny: 16, timer: 20 });
		expect(first.costMock()).toBe(38);
	});

	it('Should caculate the cost call by list of codes when values are on the list [line 2]', () => {
		const sec = new PreDefined({ origin: 11, destiny: 17, timer: 80 });
		expect(sec.costMock()).toBe(136);
	});

	it('Should caculate the cost call by list of codes when values are on the list [line 3]', () => {
		const third = new PreDefined({ origin: 18, destiny: 11, timer: 200 });
		expect(third.costMock()).toBe(380);
	});

	it('Should send a empty value when when values are not on the list', () => {
		const third = new PreDefined({ origin: 18, destiny: 17, timer: 100 });
		expect(third.costMock()).toBe(null);
	});

	it('Should calculates when valid number are passed', () => {
		const test = new PreDefined({ timer: 10 });
		expect(test.calculate(10)).toBe(100);
	});

	it('Should returns null when try to calculate invalid number', () => {
		const test = new PreDefined({});
		expect(test.calculate()).toBe(null);
	});

	it('Should test if is valid when all required values are valid', () => {
		const product = new PreDefined({ origin: 18, destiny: 17, timer: 100 });
		expect(product.isValid()).toBeTruthy();
	});

	it('Should test if is not valid when some of required values are invalid', () => {
		const product = new PreDefined({ origin: 11, destiny: 17 });
		expect(product.isValid()).toBeFalsy();
	});

	it('Should test if is not valid when all of required values are invalid', () => {
		const product = new PreDefined({});
		expect(product.isValid()).toBeFalsy();
	});
});
