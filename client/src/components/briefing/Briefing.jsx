import React, { Component, Fragment } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import { Loading } from '../';

const BriefingCard = styled.div`
	min-height: 43rem;
`;

/**
 * Briefing default
 *
 * @class Briefing
 * @extends {Component}
 */
class Briefing extends Component {
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
			isLoading: false,
			products: [],
			briefing: [],
		};
	}

	/**
	 * When component mount
	 */
	componentDidMount() {
		this.setState({ isLoading: true });
		axios
			.all([
				axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/list`),
				axios.get(`${process.env.REACT_APP_API_ENDPOINT}/briefing/ref/speakmore`),
			])
			.then(
				axios.spread((products_response, briefing_response) => {
					this.setState({
						products: products_response.data,
						briefing: briefing_response.data[0],
					});
				})
			)
			.finally(() => {
				this.setState({ isLoading: false });
			});
	}
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Select
	 */
	render() {
		const { briefing, products, isLoading } = this.state;

		let cardBrief = (
			<Fragment>
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
			</Fragment>
		);

		if (isLoading) {
			cardBrief = <Loading showMessage />;
		}

		return (
			<BriefingCard className="card">
				<div className="card-content">{cardBrief}</div>
			</BriefingCard>
		);
	}
}

export default Briefing;
