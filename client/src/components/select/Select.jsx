import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SelectRender = styled.div`
	display: flex;
	justify-content: space-between;
	span {
		font-size: 1.5vw;
	}
	.radioPad {
		display: inline-block;
		max-width: 10vw;
		vertical-align: middle;
	}

	@media only screen and (max-width: 992px) {
		flex-flow: column;
		.radioPad {
			max-width: 100%;
		}
	}

	@media only screen and (max-width: 991px) {
		span {
			font-size: 2.5vw;
		}
    }

	@media only screen and (max-width: 600px) {
		span {
			font-size: 3.5vw;
		}
	}

	@media only screen and (max-width: 450px) {
		span {
			font-size: 5vw;
		}
	}

	.radioPad__wrapper {
		display: block;
		cursor: pointer;
		color: #fff;
		margin: 0.5rem;
		padding: 1rem;
		text-align: center;
		transition: background 0.56s ease-in-out;
	}

	.promo-30 {
		background: #7b1ca6a6;
		&:hover {
			background: #7b1ca6;
		}
	}
	.promo-60 {
		background: #008000b8;
		&:hover {
			background: green;
		}
	}
	.promo-120 {
		background: #a37a05;
		&:hover {
			background: #bc8d06;
		}
	}

	.radioPad__wrapper:active,
	.radioPad__wrapper--selected {
		background: #dea607 !important;
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
		axios
			.get(`${process.env.REACT_APP_API_ENDPOINT}/product/promotion/speak-more/list`)
			.then(response => {
				this.setState({
					plans: response.data
				});
			})
			.catch(err => {});
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
						<label
							className={
								isCurrent
									? 'radioPad__wrapper radioPad__wrapper--selected promo-' + item.timer
									: 'radioPad__wrapper promo-' + item.timer
							}
						>
							<input
								className="radioPad__radio"
								type="radio"
								name="plans"
								id={item._id}
								value={item.timer}
								title={item.title}
								onChange={this.handleRadio.bind(this)}
							/>
							<span>{item.title}</span>
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

export default Select;
