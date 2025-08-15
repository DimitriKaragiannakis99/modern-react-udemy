import React, { Component } from "react";
import "./App.css";
import Die from "./Die";

export default class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice1: "one",
			dice2: "one",
			rolling: false,
		};
	}

	static defaultProps = {
		faces: ["one", "two", "three", "four", "five", "six"],
	};

	roll = (e) => {
		let faces = this.props.faces;
		this.setState({
			rolling: true,
		});
		setTimeout(() => {
			this.setState({
				dice1: faces[Math.floor(Math.random() * 6)],
				dice2: faces[Math.floor(Math.random() * 6)],
				rolling: false,
			});
		}, 1000);
	};
	render() {
		return (
			<div>
				<div className="Dice">
					<Die
						die={this.state.dice1}
						rolling={this.state.rolling}
					/>
					<Die
						die={this.state.dice2}
						rolling={this.state.rolling}
					/>
				</div>
				<div>
					<button
						className="btn"
						onClick={this.roll}
						disabled={this.state.rolling}
					>
						{this.state.rolling ? "Rolling..." : "Roll Dice 🎲"}
					</button>
				</div>
			</div>
		);
	}
}
