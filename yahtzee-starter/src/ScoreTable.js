import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance,
} from "./Rules";

class ScoreTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { scores, doScore } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								score={scores.ones}
								doScore={(evt) => doScore("ones", ones.evalRoll)}
								desc="1 point per 1"
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={(evt) => doScore("twos", twos.evalRoll)}
								desc="2 point per 2"
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={(evt) => doScore("threes", threes.evalRoll)}
								desc="3 point per 3"
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={(evt) => doScore("fours", fours.evalRoll)}
								desc="4 point per 4"
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={(evt) => doScore("fives", fives.evalRoll)}
								desc="5 point per 5"
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={(evt) => doScore("sixes", sixes.evalRoll)}
								desc="6 point per 6"
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								score={scores.threeOfKind}
								doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
								desc="Sum all dice if 3 are the same"
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
								desc="Sum all dice if 4 are the same"
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
								desc="25 points for full house"
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={(evt) =>
									doScore("smallStraight", smallStraight.evalRoll)
								}
								desc="30 points for small straight"
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={(evt) =>
									doScore("largeStraight", largeStraight.evalRoll)
								}
								desc="40 points for large straight"
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
								desc="50 points for yahtzee"
							/>

							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={(evt) => doScore("chance", chance.evalRoll)}
								desc="Sum of all dice"
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
