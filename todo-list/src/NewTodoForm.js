import React, { Component } from "react";

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.task);
		this.setState({
			task: "",
		});
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className="todo-form"
			>
				<input
					type="text"
					name="task"
					placeholder="new todo...."
					value={this.state.task}
					onChange={this.handleChange}
				></input>
			</form>
		);
	}
}
