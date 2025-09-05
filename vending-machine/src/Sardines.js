import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Sardines.css";

export default class Sardines extends Component {
	render() {
		return (
			<div className="sardines-box">
				<div className="sardines-text">
					<h2>YOU DONT EAT THE SARDINES. THE SARDINES EAT YOU!</h2>
					<Link
						to="/"
						className="sardines-link"
					>
						GO BACK
					</Link>
				</div>
			</div>
		);
	}
}
