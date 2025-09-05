import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Chips.css";

export default class Chips extends Component {
	constructor(props) {
		super(props);
		this.state = {
			consumed: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((st) => ({
			consumed: st.consumed + 1,
		}));
	}
	render() {
		return (
			<div className="chips-box">
				<div className="chips-text">
					<h3>BAGS EATEN: {this.state.consumed}</h3>
					<button onClick={this.handleClick}>NOM NOM NOM</button>
					<Link
						to="/"
						className="chips-link"
					>
						GO BACK
					</Link>
				</div>
			</div>
		);
	}
}
