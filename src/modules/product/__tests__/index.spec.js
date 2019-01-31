const mockingoose = require('mockingoose').default;
const model = require('../model');
/**
 * Must test product class
 */
describe('Product', () => {
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
