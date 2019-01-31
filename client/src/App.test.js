import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const section = document.createElement('section');
	ReactDOM.render(<App />, section);
	ReactDOM.unmountComponentAtNode(section);
});
