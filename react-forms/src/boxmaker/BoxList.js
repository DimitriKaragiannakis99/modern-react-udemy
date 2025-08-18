import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

export default class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [{ width: 10, height: 10, color: "blue" }],
		};
		this.addBox = this.addBox.bind(this);
		this.removeBox = this.removeBox.bind(this);
	}

	addBox(box) {
		this.setState((st) => {
			return {
				boxes: [...st.boxes, box],
			};
		});
	}

	removeBox(boxID) {
		this.setState({
			boxes: [...this.state.boxes.filter((box) => box.id !== boxID)],
		});
	}

	render() {
		const boxes = this.state.boxes.map((box) => (
			<Box
				key={box.id}
				id={box.id}
				width={box.width}
				height={box.height}
				color={box.color}
				removeBox={this.removeBox}
			/>
		));
		return (
			<div>
				<h1>Color Box Maker</h1>
				<BoxForm addBox={this.addBox} />
				{boxes}
			</div>
		);
	}
}
