import React, { Component } from "react";

export default class Leaderboard extends Component {
	render() {
		return (
			<div>
				<h2>Top Score</h2>
				<div className="score">
					🚀 {window.localStorage.getItem("topScore")} 🚀
				</div>
			</div>
		);
	}
}
