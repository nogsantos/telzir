import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Header from './Header';

afterEach(cleanup);

describe('Template Header component', () => {
	test('should render app header class and name correctly', () => {
		const { getByTestId } = render(<Header />);

		const testTarget = getByTestId('header');

		expect(testTarget.className).toContain('purple darken-2 z-depth-2');
		expect(testTarget.textContent).toBe('Telzir');
	});
});
