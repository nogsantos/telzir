const component = require('../src/views/index.marko');
/**
 * Must test index marko
 */
describe('index', () => {
	beforeEach(() => {
		jest.resetModules(); // this is important
		process.env = 'test';
		delete process.env.NODE_ENV;
	});

	it('should have a renderToString function', () => {
		expect(component.renderToString).toBeDefined();
	});
});
