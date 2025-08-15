import React, { Component } from "react";
import "../styles/LotteryBall.css";

export class LotteryBall extends Component {
	render() {
		return (
			<div>
				<div className="LotteryBall">{this.props.num}</div>
			</div>
		);
	}
}

export default LotteryBall;
