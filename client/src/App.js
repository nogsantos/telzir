import React, { Component } from 'react';
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
			<section>
				<Header />
				<div className="container">
					<Body />
				</div>
				<Footer />
			</section>
		);
	}
}

export default App;
