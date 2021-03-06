const mockingoose = require('mockingoose').default;
const Product = require('../');
const model = require('../model');
/**
 * Must test product class
 */
describe('Product', () => {
	it('Should reject to find products when required params are null', () => {
		const product = new Product({});
		product.getPrice().catch(e => expect(e).toBeTruthy());
	});

	it('Should reject to return a list when has no connection', () => {
		const product = new Product({});
		product.list().catch(e => {
			expect(e).toBe('No database connection');
		});
	});

	it('Should returns a list of code with default values', () => {
		const product = new Product({});
		let list = product.getDefaultProductList();
		expect(list.length).not.toBeNull();
	});

	it('Should reject to populate database when has no connection', () => {
		const product = new Product({});
		product.setup().catch(e => {
			expect(e).toBe('No database connection');
		});
	});

	it('Should test if is valid when all required values are valid', () => {
		const product = new Product({ origin: 11, destiny: 16 });
		expect(product.isValid()).toBeTruthy();
	});

	it('Should test if is not valid when some of required values are invalid', () => {
		const product = new Product({ origin: 11 });
		expect(product.isValid()).toBeFalsy();
	});

	it('Should test if is not valid when all of required values are invalid', () => {
		const product = new Product({});
		expect(product.isValid()).toBeFalsy();
	});

	it('Should returns false when has no database connection', () => {
		const product = new Product({});
		expect(product.hasConnection()).toBeFalsy();
	});

	it('Should mock mongo', () => {
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
});
