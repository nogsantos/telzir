import React, { Component } from 'react';
import { Header, Footer } from './components/template/index';
/**
 * App default class
 */
class App extends Component {
    /**
     *
     */
	render() {
		return (
			<section>
				<Header />
				<div className="container">
					<h1>Body</h1>
				</div>
				<Footer />
			</section>
		);
	}
}

export default App;
