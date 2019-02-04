const Briefing = require('../');
/**
 * Must test briefing class
 */
describe('Briefing', () => {
	it('It reject to return a list when has no connection', () => {
		const briefing = new Briefing({});
		briefing.list().catch(e => {
			expect(e).toBe('No database connection');
		});
	});

	it('It test if is valid when all required values are valid', () => {
		const briefing = new Briefing({ ref_id: 30 });
		expect(briefing.isValid()).toBeTruthy();
	});

	it('It test if is not valid when all of required values are invalid', () => {
		const briefing = new Briefing({});
		expect(briefing.isValid()).toBeFalsy();
	});

	it('It returns false when has no database connection', () => {
		const briefing = new Briefing({});
		expect(briefing.hasConnection()).toBeFalsy();
	});

	it('It reject to get value by reference when no refereces is invalid', () => {
		const briefing = new Briefing({});
		briefing.getByReference().catch(e => {
			expect(e).toBe('Field(s) ref_id values can not be empty');
		});
	});

	it('It reject to populate database when has no connection', () => {
		const briefing = new Briefing({});
		briefing.setup().catch(e => {
			expect(e).toBe('No database connection');
		});
	});
});
