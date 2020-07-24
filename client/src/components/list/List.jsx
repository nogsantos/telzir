import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const Highlight = styled.span`
	font-weight: bolder;
	font-style: italic;
`;

const Message = styled.div``;

const ResponsedColor = styled.div`
	.promo {
		text-align: center;
		padding: 5px;
		color: #ffffff;
		width: 130px;
	}
`;

const Plan = styled.span`
	font-size: 5rem;
`;

const PlanValue = styled.div``;

/**
 * List default
 *
 * @class List
 * @extends {Component}
 */
class List extends Component {
	/**
	 * Constructor
	 *
	 * @param {Props} props
	 */
	constructor(props) {
		super(props);

		this.baseUrl = `${process.env.REACT_APP_API_ENDPOINT}/product/promotion`;

		this.state = {
			list: [],
			withPlan: null,
			withoutPlan: null,
			diff: null,
			isLoading: false,
			message: null
		};
	}

	/**
	 * Fill the list with selected value
	 */
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.selected && nextProps.selected._id !== null) {
			return { list: [nextProps.selected] };
		}
		return null;
	}

	componentDidUpdate(prevProps) {
		if (this.props.selected !== prevProps.selected) {
			this.getPlanValues();
		}
	}

	/**
	 * Get calculated values of plans
	 */
	getPlanValues = () => {
		const { origin, destiny, time, plan } = this.state.list[0];

		if (origin === null || destiny === null || time === null) {
			return;
		}

		const speakMore = axios.get(`${this.baseUrl}/speak-more/${origin}/${destiny}/${time}/${plan.timer}`);
		const defaultValues = axios.get(`${this.baseUrl}/default/${origin}/${destiny}/${time}`);

		this.setState({ isLoading: true });

		axios
			.all([speakMore, defaultValues])
			.then(
				axios.spread((withPlanResponse, withoutPlanResponse) => {
					const withPlan = this._planResponse(withPlanResponse.data);
					const withoutPlan = this._planResponse(withoutPlanResponse.data);
					const diff = this._planResponse(withoutPlanResponse.data - withPlanResponse.data);
					this.setState({ withPlan, withoutPlan, diff });
				})
			)
			.catch(error => {
				const err = { error };
				const message = JSON.parse(err.error.request.response);
				this.setState({ message: message.error });
			})
			.finally(() => {
				this.setState({ isLoading: false });
			});
	};

	_planResponse(response) {
		let value = '-';
		if (typeof response === 'number') {
			value = response.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		}
		return value;
	}

	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof List
	 */
	render() {
		const { withPlan, withoutPlan, message, diff, isLoading } = this.state;
		return (
			<Fragment>
				<Message>{message}</Message>
				{withPlan && withoutPlan ? (
					<div className="row">
						{this.state.list.map((value, key) => {
							const plan = value.plan.title.split(' ')[1];
							return (
								<div key={value._id} className="card horizontal z-depth-1-half">
									<div className={'card-image promo--' + plan}>
										<ResponsedColor>
											<div className="flow-text promo">
												FaleMais <Plan>{plan}</Plan>
											</div>
										</ResponsedColor>
									</div>
									<div className="card-stacked">
										<div className="card-content flow-text">
											<div className="row">
												<PlanValue className="col s12">
													<span className="left-align">Sem plano</span>
													<span className="right-align">{isLoading ? '...' : withoutPlan}</span>
												</PlanValue>
											</div>
											<div className="row">
												<PlanValue className="col s12">
													<span className="left-align">Com plano</span>
													<span className="right-align">{isLoading ? '...' : withPlan}</span>
												</PlanValue>
											</div>

											<hr />
											<div className="row">
												<PlanValue className="col s12">
													<span className="left-align">Economia</span>
													<span className="right-align">{isLoading ? '...' : diff}</span>
												</PlanValue>
											</div>
										</div>
										<div className="card-action">
											<div className="row">
												<div className="col s12 m12 l12 xl4">Origem: {value.origin}</div>
												<div className="col s12 m12 l12 xl4">Destino: {value.destiny}</div>
												<div className="col s12 m12 l12 xl4">Tempo: {value.time}</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="card">
						<div className="card-content">
							<div className="flow-text center grey-text grey-darken-3">
								Informe os valores de <Highlight>Origem</Highlight>, <Highlight>Destino</Highlight> e{' '}
								<Highlight>Minutos</Highlight>, <Highlight>selecione o plano</Highlight> para realizar o calculo
							</div>
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}

List.propTypes = {
	selected: PropTypes.object
};

export default List;
