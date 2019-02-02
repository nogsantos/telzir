import React, { Component } from 'react';
import styled from 'styled-components';

const InputRender = styled.span`
	margin: 1rem;
`;

/**
 * Input default
 *
 * @class Input
 * @extends {Component}
 */
class Input extends Component {
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Input
	 */
	render() {
		return (
			<InputRender className="input">
				<input type="number" placeholder={this.props.placeholder} />
				<span />
			</InputRender>
		);
	}
}

export default Input;
