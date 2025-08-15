import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heads: true,
			numHeads: 0,
			numTails: 0,
		};
	}

	flip = (st) => {
		Math.floor(Math.random() * 2)
			? this.setState((st) => {
					return {
						heads: true,
						numHeads: st.numHeads + 1,
					};
			  })
			: this.setState((st) => {
					return {
						heads: false,
						numTails: st.numTails + 1,
					};
			  });
	};

	handleClick = (e) => {
		this.flip(this.state);
	};

	render() {
		return (
			<div>
				<section>
					<h1>Let's flip a coin!</h1>
				</section>
				<Coin heads={this.state.heads} />
				<button onClick={this.handleClick}>Flip Me 🪙</button>
				<div>
					Out of {this.state.numHeads + this.state.numTails} flips, there are{" "}
					{this.state.numHeads} heads and {this.state.numTails} tails
				</div>
			</div>
		);
	}
}
