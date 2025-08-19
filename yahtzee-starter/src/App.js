import React, { Component } from "react";
import Game from "./Game";
import Leaderboard from "./Leaderboard";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="leaderboard">
					<Leaderboard />
				</div>
				<div className="App">
					<Game />
				</div>
			</div>
		);
	}
}

export default App;
