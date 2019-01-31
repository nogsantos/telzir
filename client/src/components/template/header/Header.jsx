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
			<MainHeader className="purple darken-2 z-depth-2">
				<div className="container">Header</div>
			</MainHeader>
		);
	}
}
export default Header;
