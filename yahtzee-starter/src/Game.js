import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: Array.from({ length: NUM_DICE }, () =>
				Math.ceil(Math.random() * 6)
			),
			locked: Array(NUM_DICE).fill(false),
			rollsLeft: NUM_ROLLS,
			scores: {
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined,
				threeOfKind: undefined,
				fourOfKind: undefined,
				fullHouse: undefined,
				smallStraight: undefined,
				largeStraight: undefined,
				yahtzee: undefined,
				chance: undefined,
			},
			totalScore: 0,
			gameOver: false,
		};
		this.roll = this.roll.bind(this);
		this.doScore = this.doScore.bind(this);
		this.toggleLocked = this.toggleLocked.bind(this);
		this.handleRestart = this.handleRestart.bind(this);
	}

	handleRestart(evt) {
		// add score to local storage with time as id and toggle page refresh
		// not sure if this is bad practice
		const topScore = window.localStorage.getItem("topScore");

		if (!topScore || Number(topScore) < this.state.topScore) {
			window.localStorage.setItem("topScore", `${this.state.totalScore}`);
		}
		window.location.reload();
	}

	roll(evt) {
		// roll dice whose indexes are in reroll
		this.setState((st) => ({
			dice: st.dice.map((d, i) =>
				st.locked[i] ? d : Math.ceil(Math.random() * 6)
			),
			locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
			rollsLeft: st.rollsLeft - 1,
		}));
	}

	toggleLocked(idx) {
		// Check if user used all rerolls:
		if (this.state.rollsLeft > 0) {
			// toggle whether idx is in locked or not
			this.setState((st) => ({
				locked: [
					...st.locked.slice(0, idx),
					!st.locked[idx],
					...st.locked.slice(idx + 1),
				],
			}));
		}
	}

	doScore(rulename, ruleFn) {
		// evaluate this ruleFn with the dice and score this rulename
		this.setState(
			(st) => ({
				scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
				rollsLeft: NUM_ROLLS,
				locked: Array(NUM_DICE).fill(false),
			}),
			() => {
				// Check if game is over
				if (!Object.values(this.state.scores).includes(undefined)) {
					// Game over
					this.setState({
						gameOver: true,
					});
				} else {
					this.setState((st) => ({
						totalScore: Object.values(st.scores)
							.filter((s) => s !== undefined)
							.reduce((acc, curr) => acc + curr, 0),
					}));
					this.roll();
				}
			}
		);
	}

	render() {
		return (
			<div className="Game">
				<header className="Game-header">
					<h1 className="App-title">Yahtzee!</h1>

					<section className="Game-dice-section">
						<Dice
							dice={this.state.dice}
							locked={this.state.locked}
							handleClick={this.toggleLocked}
						/>
						<div className="Game-button-wrapper">
							<button
								className="Game-reroll"
								disabled={this.state.locked.every((x) => x)}
								onClick={this.roll}
							>
								{this.state.rollsLeft} Rerolls Left
							</button>
						</div>
					</section>
				</header>
				<ScoreTable
					doScore={this.doScore}
					scores={this.state.scores}
				/>
				<div>
					<div className="total-score">
						Total Score: {this.state.totalScore}
					</div>
					<div>
						{this.state.gameOver && (
							<button onClick={this.handleRestart}>Restart?</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Game;
