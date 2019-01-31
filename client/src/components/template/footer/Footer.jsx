import React, { Component } from 'react';
import styled from 'styled-components';

const FooterRender = styled.div`
	.footer-copyright {
		overflow: hidden;
		min-height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		a {
			color: inherit !important;
			text-decoration: inherit;
			&:hover {
				text-decoration: underline;
			}
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
	/**
	 * Render footer for logged user
	 *
	 * @memberof Footer
	 */
	renderUserFooter = () => {
		return (
			<div className="col s12 m12 xl12">
				<div className="container">
					<div className="footer-copyright">{new Date().getFullYear()}</div>
				</div>
			</div>
		);
	};
	/**
	 * Render footer strategy
	 *
	 * @memberof Footer
	 */
	RenderFooter = ({ children }) => {
		return <FooterRender>{children}</FooterRender>;
	};
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Footer
	 */
	render() {
		return <this.RenderFooter>{this.renderUserFooter()}</this.RenderFooter>;
	}
}

export default Footer;
