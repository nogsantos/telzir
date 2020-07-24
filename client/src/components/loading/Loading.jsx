import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoaderIcon = styled.div`
	.letter-holder {
		padding: 16px;
	}

	.letter {
		float: left;
		font-size: 3rem;
		color: #777;
		animation-name: loadingF;
		animation-duration: 1.6s;
		animation-iteration-count: infinite;
		animation-direction: linear;
	}

	.l-1 {
		animation-delay: 0.48s;
	}
	.l-2 {
		animation-delay: 0.6s;
	}
	.l-3 {
		animation-delay: 0.72s;
	}
	.l-4 {
		animation-delay: 0.84s;
	}
	.l-5 {
		animation-delay: 0.96s;
	}
	.l-6 {
		animation-delay: 1.08s;
	}
	.l-7 {
		animation-delay: 1.2s;
	}
	.l-8 {
		animation-delay: 1.32s;
	}
	.l-9 {
		animation-delay: 1.44s;
	}
	.l-10 {
		animation-delay: 1.56s;
    }
    .l-11 {
		animation-delay: 1.62s;
    }
    .l-12 {
		animation-delay: 1.71s;
    }
    .l-13 {
		animation-delay: 1.8s;
	}
	@keyframes loadingF {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

/**
 * Loader default
 *
 * @class Loader
 * @extends {Component}
 */
class Loader extends Component {
	render() {
		let message = <Fragment></Fragment>;

		if (this.props.showMessage) {
			message = (
				<Fragment>
					<div className="l-1 letter">C</div>
					<div className="l-2 letter">a</div>
					<div className="l-3 letter">r</div>
					<div className="l-4 letter">r</div>
					<div className="l-5 letter">e</div>
					<div className="l-6 letter">g</div>
					<div className="l-7 letter">a</div>
					<div className="l-8 letter">n</div>
					<div className="l-9 letter">d</div>
					<div className="l-10 letter">o</div>
				</Fragment>
			);
		}
		return (
			<LoaderIcon>
				<div className="letter-holder">
					{message}
					<div className="l-11 letter">.</div>
					<div className="l-12 letter">.</div>
					<div className="l-13 letter">.</div>
				</div>
			</LoaderIcon>
		);
	}
}

Loader.propTypes = {
	showMessage: PropTypes.bool,
};

export default Loader;
