import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		alert(`You typed ${this.state.username}`);
		this.setState({ username: "" });
	}
	render() {
		return (
			<div>
				<h1>Form Demo</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
