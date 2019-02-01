const mockingoose = require('mockingoose').default;
const PreDefined = require('../');
/**
 * Must test pre-defined class
 *
 * @todo Mock product
 */
describe('Pre-defined', () => {
	it('It caculate the cost call by list of codes [Ex. line 1]', () => {
		const first = new PreDefined({ origin: 11, destiny: 16, timer: 20 });
		first.cost().then(value => expect(value).toBe(38));
	});

	it('It caculate the cost call by list of codes [Ex. line 2]', () => {
		const sec = new PreDefined({ origin: 11, destiny: 17, timer: 80 });
		sec.cost().then(value => expect(value).toBe(136));
	});

	it('It caculate the cost call by list of codes [Ex. line 3]', () => {
		const third = new PreDefined({ origin: 18, destiny: 11, timer: 200 });
		third.cost().then(value => expect(value).toBe(380));
	});
});
