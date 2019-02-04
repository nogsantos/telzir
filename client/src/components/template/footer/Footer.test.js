import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Footer from './Footer';

afterEach(cleanup);

describe('Template Footer component', () => {
	test('should render author name and class correctly', () => {
		const { getByTestId } = render(<Footer />);
		const testTarget = getByTestId('author');

		expect(testTarget.className).toBe('pull-left');
		expect(testTarget.textContent).toBe('Fabricio Nogueira©2019');
	});

	test('should render contact address correctly', () => {
		const { getByTestId } = render(<Footer />);

		const testTarget = getByTestId('contact-address');

		expect(testTarget.className).toBe('pull-rigth');
		expect(testTarget.textContent).toBe('fabricionogueira.me');
	});
});
