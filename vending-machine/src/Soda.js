import React, { Component } from "react";
import "./styles/Soda.css";
import { Link } from "react-router-dom";

export default class Soda extends Component {
	render() {
		return (
			<div className="soda-box">
				<div>
					<img
						src="/pepsi-can-nobg.png"
						alt="soda-can"
						className="soda-img"
					></img>
				</div>
				<div className="soda-text">
					<div>OMG SUGGARRRRR</div>
					<div>
						<Link
							to="/"
							className="soda-link"
						>
							GO BACK
						</Link>
					</div>
				</div>
				<div>
					<img
						src="/pepsi-can-nobg.png"
						alt="soda-can"
						className="soda-img"
					></img>
				</div>
			</div>
		);
	}
}
