import React, { Component } from 'react';

import styled from 'styled-components';

const MainHeader = styled.div`
	color: #fff;
`;

const HeaderTitle = styled.div`
	@media(min-width: 960px) {
        height: 5rem;
		font-size: 3.5rem;
	}
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
					<HeaderTitle className="flow-text">Telzir</HeaderTitle>
				</div>
			</MainHeader>
		);
	}
}
export default Header;
