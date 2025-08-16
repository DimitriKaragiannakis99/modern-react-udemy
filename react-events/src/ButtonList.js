import React, { Component } from "react";

export default class ButtonList extends Component {
	static defaultProps = {
		colors: ["#ffd248", "#60f68c", "#d18282", "#ab82d1"],
	};

	constructor(props) {
		super(props);
		this.state = {
			color: "cyan",
		};
	}

	changeColor(newColor) {
		this.setState({
			color: newColor,
		});
	}
	render() {
		return (
			<div
				className="ButtonList"
				style={{ backgroundColor: this.state.color }}
			>
				{this.props.colors.map((c) => {
					return (
						<button
							style={{ backgroundColor: c }}
							onClick={this.changeColor.bind(this, c)}
						>
							Click Me 🫵
						</button>
					);
				})}
			</div>
		);
	}
}
