import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>404 - Page Not Found</h1>
				<p>The page you are looking for does not exist.</p>
				<Link to="/">Go back to searching</Link>
			</div>
		);
	}
}
