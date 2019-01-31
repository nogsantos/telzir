import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

/**
 * App Body
 *
 * @class Body
 * @extends {Component}
 */
class Body extends Component {
	state = {
		persons: []
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
			const persons = res.data;
			this.setState({ persons });
		});
	}
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Body
	 */
	render() {
		return (
			<div className="row">
				<div className="col s12 m12 xl12">
					<div className="card">
						<div className="card-content">
							<ul>
								{this.state.persons.map(person => (
									<li>{person.name}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Body;
