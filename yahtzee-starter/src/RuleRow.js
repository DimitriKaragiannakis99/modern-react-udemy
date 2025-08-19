import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
	render() {
		const { score, name, doScore } = this.props;
		const disabled = score != undefined;
		return (
			<tr
				className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
				onClick={disabled ? null : doScore}
			>
				<td className="RuleRow-name">{this.props.name}</td>
				{disabled ? (
					<td className="RuleRow-score">{this.props.score}</td>
				) : (
					<td className="RuleRow-desc">{this.props.desc}</td>
				)}
			</tr>
		);
	}
}

export default RuleRow;
