const Calculator = require('../');
/**
 * Must test index marko
 */
describe('Calculator', () => {
	it('Should caculate', () => {
		let calculator = new Calculator();
		let res = calculator.sum(1, 1);
		expect(res).toBe(2);
	});
});
