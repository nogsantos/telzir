import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectRender = styled.div`
	.radioPad {
		display: inline-block;
		width: 100%;
		vertical-align: middle;
	}

	@media (min-width: 440px) {
		.radioPad {
			width: 50%;
		}
	}

	@media (min-width: 560px) {
		.radioPad {
			width: 33.333333333333336%;
		}
	}

	.radioPad__wrapper {
		display: block;
		cursor: pointer;
		background: #a37a05;
		color: #fff;

		margin: 0.5rem;
		padding: 1rem;
		text-align: center;
	}

	.radioPad__wrapper:active,
	.radioPad__wrapper--selected {
		background: #dea607 !important;
	}

	.radioPad__wrapper:hover {
		background: #bc8d06;
	}

	.radioPad__radio {
		visibility: hidden;
		height: 0;
		width: 0;
		opacity: 0;
	}
`;

/**
 * Select default
 *
 * @class Select
 * @extends {Component}
 */
class Select extends Component {
	/**
	 * Constructor
	 *
	 * @param {Props} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			plans: [],
			select: ''
		};
	}

	/**
	 * When component mount
	 */
	componentDidMount() {
		axios.all([axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/promotion/speak-more/list`)]).then(
			axios.spread(promotion_response => {
				this.setState({
					plans: promotion_response.data
				});
			})
		);
	}

	/**
	 * Handler
	 *
	 * @param {*} e
	 */
	handleRadio(e) {
		/**
		 * Context
		 */
		const { selectedPlan } = this.props;
		selectedPlan({ id: e.target.id, timer: e.target.value, title: e.target.title });
		/**
		 * Set current selected
		 */
		this.setState({ select: e.target.id });
	}

	/**
	 * Render mapper
	 */
	Render = () =>
		this.state.plans.map((item, key) => {
			const isCurrent = this.state.select === item._id;
			return (
				<div key={key} className="radioPad">
					<div>
						<label className={isCurrent ? 'radioPad__wrapper radioPad__wrapper--selected' : 'radioPad__wrapper'}>
							<input
								className="radioPad__radio"
								type="radio"
								name="plans"
								id={item._id}
								value={item.timer}
								title={item.title}
								onChange={this.handleRadio.bind(this)}
							/>
							<span className="flow-text">{item.title}</span>
						</label>
					</div>
				</div>
			);
		});

	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Select
	 */
	render() {
		return <SelectRender>{this.Render()}</SelectRender>;
	}
}

// Select.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	name: PropTypes.string.isRequired
// };

export default Select;
