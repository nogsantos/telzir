import React, { Component } from 'react';
import Input, { Imput } from '../../input';
import axios from 'axios';
/**
 * App Body
 *
 * @class Body
 * @extends {Component}
 */
class Body extends Component {
	state = {
		products: []
	};

	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/`).then(res => {
			const products = res.data;
			this.setState({ products });
		});
	}
	/**
	 * Component render method
	 *
	 * @returns
	 * @memberof Body
	 */
	render() {
		return (
			<div className="row">
				<div className="col s12 m12 xl12">
					<div className="card">
						<div className="card-content">
							<ul>
								{this.state.products.map(product => (
									<li>{product.price}</li>
								))}
							</ul>
							<Input placeholder="Origem"/>
							<Input placeholder="Destino"/>
							<Input placeholder="Minutos"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Body;
