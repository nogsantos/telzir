const PreDefined = require('../');
/**
 * Must test pre-defined class
 *
 * @todo Mock product
 */
describe('Pre-defined', () => {
	it('It caculate the cost call by list of codes when values are on the list [line 1]', () => {
		const first = new PreDefined({ origin: 11, destiny: 16, timer: 20 });
		expect(first.costMock()).toBe(38);
	});

	it('It caculate the cost call by list of codes when values are on the list [line 2]', () => {
		const sec = new PreDefined({ origin: 11, destiny: 17, timer: 80 });
		expect(sec.costMock()).toBe(136);
	});

	it('It caculate the cost call by list of codes when values are on the list [line 3]', () => {
		const third = new PreDefined({ origin: 18, destiny: 11, timer: 200 });
		expect(third.costMock()).toBe(380);
	});

	it('It send a empty value when when values are not on the list', () => {
		const third = new PreDefined({ origin: 18, destiny: 17, timer: 100 });
		expect(third.costMock()).toBe(null);
	});
});
