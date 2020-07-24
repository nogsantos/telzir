import React, { Component } from 'react';

import { Briefing, Calculator } from '../../';

/**
 * App Body
 *
 * @class Body
 * @extends {Component}
 */
class Body extends Component {
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Body
	 */
	render() {
		return (
			<div className="row">
				<div className="col s12 m5 xl5">
					<Briefing />
				</div>
				<div className="col s12 m7 xl7">
					<Calculator />
				</div>
			</div>
		);
	}
}

export default Body;
