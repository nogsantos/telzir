import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const Highlight = styled.span`
	font-weight: bolder;
	font-style: italic;
`;

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

		this.state = {
			list: [],
			withPlan: null,
			withoutPlan: null
		};
	}

	/**
	 * Fill the list with selected value
	 */
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.selected && nextProps.selected._id !== null) {
			return { list: [nextProps.selected] };
		} else return null;
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
		axios
			.all([
				axios.get(
					`${process.env.REACT_APP_API_ENDPOINT}/product/promotion/speak-more/${this.state.list[0].origin}/${
						this.state.list[0].destiny
					}/${this.state.list[0].time}/${this.state.list[0].plan.timer}`
				),
				axios.get(
					`${process.env.REACT_APP_API_ENDPOINT}/product/promotion/default/${this.state.list[0].origin}/${
						this.state.list[0].destiny
					}/${this.state.list[0].time}`
				)
			])
			.then(
				axios.spread((withPlan_response, withoutPlan_response) => {
					const withPlan =
						typeof withPlan_response.data === 'number'
							? withPlan_response.data.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
							: '-';
					const withoutPlan =
						typeof withoutPlan_response.data === 'number'
							? withoutPlan_response.data.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
							: '-';

					this.setState({
						withPlan: withPlan,
						withoutPlan: withoutPlan
					});
				})
			);
	};

	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof List
	 */
	render() {
		const { withPlan, withoutPlan } = this.state;
		return (
			<Fragment>
				{withPlan && withoutPlan ? (
					<div className="card">
						<div className="card-content">
							<div className="row">
								<table className="responsive-table highlight">
									<thead>
										<tr>
											<th>Origem</th>
											<th>Destino</th>
											<th>Tempo</th>
											<th>Plano</th>
											<th className="center">Com FaleMais</th>
											<th className="center">Sem FaleMais</th>
										</tr>
									</thead>
									<tbody>
										{this.state.list.map((value, key) => {
											return (
												<tr key={value._id}>
													<td>{value.origin}</td>
													<td>{value.destiny}</td>
													<td>{value.time}</td>
													<td>{value.plan.title}</td>
													<td className="center">{withPlan}</td>
													<td className="center">{withoutPlan}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				) : (
					<div className="flow-text center grey-text grey-darken-3">
						Informe os valores de <Highlight>Origem</Highlight>, <Highlight>Destino</Highlight>,{' '}
						<Highlight>Minutos</Highlight> e <Highlight>Selecione o Plano</Highlight> para realizar o calculo
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
