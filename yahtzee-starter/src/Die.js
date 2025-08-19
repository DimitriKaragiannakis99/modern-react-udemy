import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
const faces = ["one", "two", "three", "four", "five", "six"];

class Die extends Component {
	constructor(props) {
		super(props);
		this.handleLocked = this.handleLocked.bind(this);
	}

	handleLocked(e) {
		this.props.handleClick(this.props.idx);
	}
	render() {
		return (
			<button onClick={this.handleLocked}>
				<FontAwesomeIcon
					icon={`fas fa-dice-${faces[this.props.val - 1]}`}
					className={!this.props.locked ? "Die" : "Die-locked"}
				/>
			</button>
		);
	}
}

export default Die;
