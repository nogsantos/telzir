import React, { Component } from 'react';

import styled from 'styled-components';

const FooterRender = styled.div`
	z-index: 10;
`;
const Copyright = styled.div`
	overflow: hidden;
	min-height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	a {
		color: inherit;
		text-decoration: inherit;
		&:hover {
			text-decoration: underline;
		}
	}
`;
/**
 * App stick footer
 *
 * @class Footer
 * @extends {Component}
 */
class Footer extends Component {
	constructor() {
		super();

		const year = new Date();
		this.state = { currentYear: year.getFullYear() };
	}

	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Footer
	 */
	render() {
		const { currentYear } = this.state;
		return (
			<FooterRender>
				<div className="col s12 m12 xl12">
					<div className="container">
						<Copyright>
							<span data-testid="author" className="pull-left">
								&copy;Fabricio Nogueira {currentYear}
							</span>
							<span data-testid="contact-address" className="pull-rigth">
								<a href="https://fabricionogueira.me" target="_blanck">
									fabricionogueira.me
								</a>
							</span>
						</Copyright>
					</div>
				</div>
			</FooterRender>
		);
	}
}

export default Footer;
