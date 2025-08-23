import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";
export default class ZenQuote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			isLoaded: false,
		};
	}
	componentDidMount() {
		// load data
		// set state with that data
		axios.get("https://api.github.com/zen").then((resp) => {
			setTimeout(
				function () {
					this.setState({
						quote: resp.data,
						isLoaded: true,
					});
				}.bind(this),
				3000
			);
		});
	}
	render() {
		return (
			<div>
				{!this.state.isLoaded ? (
					<div>
						<div className="body">
							<span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</span>
							<div className="base">
								<span></span>
								<div className="face"></div>
							</div>
						</div>
						<div className="longfazers">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<h1>Loading...</h1>
					</div>
				) : (
					<div id="Quote">
						<h2>Always Remember....</h2>
						<p>{this.state.quote}</p>
					</div>
				)}
			</div>
		);
	}
}
