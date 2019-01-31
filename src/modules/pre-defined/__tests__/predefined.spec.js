const mockingoose = require('mockingoose').default;
const model = require('../../product/model');
const PreDefined = require('../');
/**
 * Must test pre-defined class
 */
describe('Pre-defined', () => {
	it('It returns a list of code with default values', () => {
		const predefined = new PreDefined();
		let list = predefined.listOfCode();
		expect(list.length).not.toBeNull();
	});

	it('It caculate the cost call by list of codes [Ex. line 1]', () => {
		const first = new PreDefined(11, 16, 20);
		expect(first.cost()).toBe(38);
	});

	it('It caculate the cost call by list of codes [Ex. line 2]', () => {
		const sec = new PreDefined(11, 17, 80);
		expect(sec.cost()).toBe(136);
	});

	it('It caculate the cost call by list of codes [Ex. line 3]', () => {
		const third = new PreDefined(18, 11, 200);
		expect(third.cost()).toBe(380);
	});

	it('It mock mongo', () => {
		const _doc = {
			origin: 11,
			destiny: 16,
			price: 1.9
		};
		mockingoose.ListOfCode.toReturn(_doc, 'find');
		return model.find({ origin: 11, destiny: 16 }).then(doc => {
			expect(doc.price).toBe(1.9);
		});
	});
});
