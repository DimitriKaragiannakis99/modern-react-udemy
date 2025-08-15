import React, { Component } from "react";
import "../styles/Coin.css";

export default class Coin extends Component {
	render() {
		return (
			<div>
				<div className="Coin">
					<img
						src={
							this.props.heads
								? "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/Capped5SE-63o.jpg"
								: "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/Capped5SE-63r.jpg"
						}
					/>
				</div>
			</div>
		);
	}
}
