import React, { Component, Fragment } from 'react';
import { Header, Body, Footer } from './components/template/index';

/**
 * App
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
	/**
	 * Render
	 *
	 * @returns
	 * @memberof App
	 */
	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<Body />
				</div>
				<Footer />
			</Fragment>
		);
	}
}

export default App;
