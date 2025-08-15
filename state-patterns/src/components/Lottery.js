import React, { Component } from "react";
import "../styles/Lottery.css";
import LotteryBall from "./LotteryBall";

export default class Lottery extends Component {
	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.numBalls }) };
		this.generateNums = this.generateNums.bind(this);
	}

	static defaultProps = {
		title: "Lotto",
		numBalls: 6,
		maxNum: 40,
	};

	generateNums() {
		this.setState((st) => ({
			nums: [...st.nums].map(() =>
				Math.floor(Math.random() * this.props.maxNum)
			),
		}));
	}
	render() {
		return (
			<div className="Lottery">
				<div className="title">{this.props.title}</div>
				<div className="balls">
					{this.state.nums.map((n) => (
						<LotteryBall num={n} />
					))}
				</div>
				<div>
					<button
						className="btn"
						onClick={this.generateNums}
					>
						Generate
					</button>
				</div>
			</div>
		);
	}
}
