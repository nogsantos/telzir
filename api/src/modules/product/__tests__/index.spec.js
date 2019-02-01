const mockingoose = require('mockingoose').default;
const Product = require('../');
const model = require('../model');
/**
 * Must test product class
 */
describe('Product', () => {
	it('It returns a list of code with default values', () => {
		const product = new Product({});
		let list = product.getDefaultProductList();
		expect(list.length).not.toBeNull();
	});

	it('It mock mongo', () => {
		const _doc = {
			origin: 11,
			destiny: 16,
			price: 1.9
		};
		mockingoose.CodeList.toReturn(_doc, 'find');
		return model.find({ origin: 11, destiny: 16 }).then(doc => {
			expect(doc.price).toBe(1.9);
		});
	});

	it('It reject to find products when required params are null', () => {
		const product = new Product({});
		return product.getPrice().catch(e => expect(e).toBeTruthy());
	});

	it('It populate database with default list values when data are valid', () => {
		const product = new Product({});
		product.setup();
	});
});
