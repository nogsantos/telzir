import React, { Component } from 'react';
import styled from 'styled-components';

const MainHeader = styled.div`
	height: 15rem;
	color: #fff;
`;

/**
 * Header main component
 *
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Header
	 */
	render() {
		return (
			<MainHeader data-testid="header" className="purple darken-2 z-depth-2">
				<div className="container">
					<div className="row">
						<div className="col s12 m12 xl12">
							<h1>Telzir</h1>
						</div>
					</div>
				</div>
			</MainHeader>
		);
	}
}
export default Header;
