import React, { Component } from "react";

export default class Rando extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 0, won: false };
	}

	makeTimer() {
		setInterval(() => {
			let rand = Math.floor(Math.random() * this.props.maxNum);
			this.setState({ num: rand });
		}, 1000);
	}

	// Arrow function directly binds method
	getRandomNumber = (e) => {
		let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
		if (rand === 7) {
			this.setState({ num: rand, won: true });
		} else {
			this.setState({ num: rand, won: false });
		}
	};

	render() {
		return (
			<div>
				<h1>Number: {this.state.num}</h1>
				<button onClick={this.getRandomNumber}>
					Generate Random Number 🍀
				</button>
				{this.state.won && <h3>Winner Winner Chicken Dinner 🐥</h3>}
			</div>
		);
	}
}
