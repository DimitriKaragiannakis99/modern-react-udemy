import React, { Component } from "react";
import "./Joke.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default class Joke extends Component {
	static defaultProps = {
		emojis: ["💩", "😡", "🙁", "😄", "😁", "🤯", "🤩"],
	};

	getColor() {
		let rating = this.props.rating;

		if (rating <= -6) {
			return "#d32f2f"; // dark red
		} else if (rating <= -1) {
			return "#f44336"; // red
		} else if (rating <= 4) {
			return "#ff9800"; // orange
		} else if (rating <= 9) {
			return "#ffeb3b"; // yellow
		} else if (rating <= 14) {
			return "#8bc34a"; // light green
		} else {
			return "#4caf50"; // green
		}
	}

	setEmoji() {
		let rating = this.props.rating;
		let emoji;
		if (rating >= 15) {
			emoji = this.props.emojis[6];
		} else if (rating < 15 && rating >= 10) {
			emoji = this.props.emojis[5];
		} else if (rating < 10 && rating >= 5) {
			emoji = this.props.emojis[4];
		} else if (rating < 5 && rating >= 0) {
			emoji = this.props.emojis[3];
		} else if (rating < 0 && rating >= -5) {
			emoji = this.props.emojis[2];
		} else if (rating < -5 && rating >= -10) {
			emoji = this.props.emojis[1];
		} else {
			emoji = this.props.emojis[0];
		}

		return emoji;
	}

	render() {
		return (
			<div className="Joke">
				<div className="Rating">
					<FontAwesomeIcon
						icon={faArrowUp}
						className="fa-icon"
						onClick={this.props.upvote}
					/>
					<span
						className="joke-rating"
						style={{ borderColor: this.getColor() }}
					>
						{this.props.rating}
					</span>
					<FontAwesomeIcon
						icon={faArrowDown}
						className="fa-icon"
						onClick={this.props.downvote}
					/>
				</div>
				<div className="joke-text">{this.props.joke}</div>
				<div className="emoji">{this.setEmoji()}</div>
			</div>
		);
	}
}
