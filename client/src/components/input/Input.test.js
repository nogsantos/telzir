import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Input from './Input';

afterEach(cleanup);

describe('Input component', () => {
	test('should throws an error for required props when they are missing', () => {
		const props = {
			id: 'origin',
			label: 'Origem'
		};
		render(<Input {...props} />);
		jest.spyOn(global.console, 'warn');
	});

	test('should render component title correctly when all required props are passed', () => {
		const props = {
			id: 'origin',
			label: 'Origem',
			min: 1,
			max: 2
		};
		const { getByTestId } = render(<Input {...props} />);

		const testTarget = getByTestId('title-render');

		expect(testTarget.htmlFor).toBe('origin');
		expect(testTarget.textContent).toBe('Origem');
	});

	test('should render input correctly when all required props are passed', () => {
		const props = {
			id: 'origin',
			label: 'Origem',
			min: 1,
			max: 2
		};
		const { getByTestId } = render(<Input {...props} />);

		const testTarget = getByTestId('input-render');

		expect(testTarget.id).toBe('origin');
		expect(testTarget.min).toBe('1');
		expect(testTarget.max).toBe('2');
	});
});
