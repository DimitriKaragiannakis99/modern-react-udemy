import React, { Component } from "react";
import "../App.css";
import { v4 as uuid } from "uuid";

export default class BoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: "",
			width: "",
			color: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newBox = {
			...this.state,
			id: uuid(),
		};
		this.props.addBox(newBox);
		this.setState({
			height: "",
			width: "",
			color: "",
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div className="form">
				<form onSubmit={this.handleSubmit}>
					<label>Height (em): </label>
					<input
						type="text"
						id="height"
						name="height"
						value={this.state.height}
						onChange={this.handleChange}
					/>
					<label>Width (em): </label>
					<input
						type="text"
						id="width"
						name="width"
						value={this.state.width}
						onChange={this.handleChange}
					/>
					<label>Color: </label>
					<input
						type="text"
						id="color"
						name="color"
						value={this.state.color}
						onChange={this.handleChange}
					/>
					<button>Add Color 🎨</button>
				</form>
			</div>
		);
	}
}
