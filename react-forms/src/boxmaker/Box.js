import React, { Component } from "react";

export default class Box extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.removeBox(this.props.id);
	}
	render() {
		return (
			<div>
				<div
					style={{
						width: `${this.props.width}em`,
						height: `${this.props.height}em`,
						backgroundColor: `${this.props.color}`,
					}}
				/>

				<button onClick={this.handleClick}>🔥</button>
			</div>
		);
	}
}
