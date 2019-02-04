import React, { Component, Fragment } from 'react';
import Input from '../../input';
import Select from '../../select';
import List from '../../list';
import axios from 'axios';
import styled from 'styled-components';

const BriefingCard = styled.div`
	min-height: 43rem;
`;
const CalculatorCard = styled.div`
	min-height: 21.9rem;
`;

const AppContext = React.createContext({
	selectedPlan: plan => {},
	setStateValue: () => {},
	calcToList: () => {}
});

/**
 * App Body
 *
 * @class Body
 * @extends {Component}
 */
class Body extends Component {
	/**
	 * Constructor
	 *
	 * @param {Props} props
	 */
	constructor(props) {
		super(props);

		this.state = {
			origin: null,
			destiny: null,
			timer: null,
			selected: null,
			products: [],
			briefing: []
		};
	}

	/**
	 * When component mount
	 */
	componentDidMount() {
		axios
			.all([
				axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/list`),
				axios.get(`${process.env.REACT_APP_API_ENDPOINT}/briefing/ref/speakmore`)
			])
			.then(
				axios.spread((products_response, briefing_response) => {
					this.setState({
						products: products_response.data,
						briefing: briefing_response.data[0]
					});
				})
			);
	}

	/**
	 * Context: When the user select a plan, sends to calculate
	 */
	selectedPlan = plan => this.calcToList(plan);

	/**
	 * Context: Set input values
	 */
	setStateValue = item => {
		let sourceValue = {};
		switch (item.source) {
			case 'origin':
				sourceValue = { origin: item.value };
				break;
			case 'destiny':
				sourceValue = { destiny: item.value };
				break;
			case 'timer':
				sourceValue = { timer: item.value };
				break;
			default:
				sourceValue = {};
				break;
		}
		this.setState(sourceValue);
	};

	/**
	 * Context: Calcule values
	 */
	calcToList = plan => {
		this.setState({
			selected: {
				_id: plan.id + this.state.origin + this.state.destiny + this.state.timer,
				origin: this.state.origin,
				destiny: this.state.destiny,
				time: this.state.timer,
				plan: plan
			}
		});
	};

	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Body
	 */
	render() {
		const { selectedPlan, setStateValue, calcToList } = this;
		const value = {
			...this.state,
			selectedPlan,
			setStateValue,
			calcToList
		};
		const { selected, briefing, products } = this.state;
		return (
			<AppContext.Provider value={value}>
				<AppContext.Consumer>
					{({ selectedPlan, setStateValue, calcToList }) => (
						<Fragment>
							<div className="row">
								<div className="col s12 m5 xl5">
									<BriefingCard className="card">
										<div className="card-content">
											<span className="card-title" dangerouslySetInnerHTML={{ __html: briefing.title }} />
											<div className="row" dangerouslySetInnerHTML={{ __html: briefing.description }} />
											<div className="row">
												<table className="responsive-table highlight">
													<caption>Tarifa fixa por minuto</caption>
													<thead>
														<tr>
															<td>Origem</td>
															<td>Destino</td>
															<td>R$/min</td>
														</tr>
													</thead>
													<tbody>
														{products.map((item, key) => {
															return (
																<tr key={key}>
																	<td>0{item.origin}</td>
																	<td>0{item.destiny}</td>
																	<td>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
																</tr>
															);
														})}
													</tbody>
												</table>
											</div>
										</div>
									</BriefingCard>
								</div>
								<div className="col s12 m7 xl7">
									<CalculatorCard className="card">
										<div className="card-content">
											<div className="row">
												<div className="col s12 m12 xl4">
													<Input id="origin" label="Origem" min={3} max={3} {...{ setStateValue }} />
												</div>
												<div className="col s12 m12 xl4">
													<Input id="destiny" label="Destino" min={3} max={3} {...{ setStateValue }} />
												</div>
												<div className="col s12 m12 xl4">
													<Input id="timer" label="Minutos" min={1} max={5} {...{ setStateValue }} />
												</div>
											</div>
											<div className="row">
												<div className="col s12 m12 xl12">
													<Select {...{ selectedPlan }} />
												</div>
											</div>
										</div>
									</CalculatorCard>
									<div className="row">
										<div className="col s12 m12 xl12">
											<List selected={selected} />
										</div>
									</div>
								</div>
							</div>
						</Fragment>
					)}
				</AppContext.Consumer>
			</AppContext.Provider>
		);
	}
}

export default Body;
