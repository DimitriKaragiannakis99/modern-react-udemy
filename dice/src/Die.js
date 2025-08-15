import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default class Die extends Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon
					icon={`fa-solid fa-dice-${this.props.die}`}
					className={`Die ${this.props.rolling && "rolling"}`}
				/>
			</div>
		);
	}
}
