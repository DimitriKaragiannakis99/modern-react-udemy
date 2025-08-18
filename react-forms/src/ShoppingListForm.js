import React, { Component } from "react";

export default class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			qty: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addItem(this.state);
		this.setState({
			name: "",
			qty: "",
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Name: </label>
					<input
						type="text"
						id="name"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<label>Quantity: </label>
					<input
						type="text"
						id="qty"
						name="qty"
						value={this.state.qty}
						onChange={this.handleChange}
					/>
					<button>Add Item +</button>
				</form>
			</div>
		);
	}
}
