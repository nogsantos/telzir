import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RenderTitle = styled.label`
	font-size: 1.7rem;
	display: flex;
	justify-content: center;
`;
const InputRender = styled.div`
	margin: 1rem;
	align-items: center;
`;
const RenderInput = styled.input`
	padding: 1rem 0 1rem 0 !important;
	text-align: center !important;
	font-size: 2.5rem !important;
	min-width: 7rem !important;
`;

/**
 * Input default
 *
 * @class Input
 * @extends {Component}
 */
class Input extends Component {
	/**
	 * A body context consumer
	 */
	blurHandler(e) {
		const { setStateValue } = this.props;
		setStateValue({ source: e.target.id, value: e.target.value });
	}

	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Input
	 */
	render() {
		return (
			<InputRender>
				<RenderTitle data-testid="title-render" htmlFor={this.props.id}>
					{this.props.label}
				</RenderTitle>
				<RenderInput
					data-testid="input-render"
					type="number"
					id={this.props.id}
					min={this.props.min}
					max={this.props.max}
					onBlur={this.blurHandler.bind(this)}
				/>
			</InputRender>
		);
	}
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired
};

export default Input;
