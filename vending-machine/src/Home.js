import React, { Component } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="text-box">
					<p>HELLO I AM A VENDING MACHINE.</p>
					<p>WHAT WOULD YOU LIKE TO EAT?</p>
				</div>
				<div className="text-box vending-items">
					<Link
						to="/soda"
						className="vending-item-link"
					>
						SODA
					</Link>
					<Link
						to="/chips"
						className="vending-item-link"
					>
						CHIPS
					</Link>
					<Link
						to="/sardines"
						className="vending-item-link"
					>
						FRESH SARDINES
					</Link>
				</div>
			</div>
		);
	}
}
