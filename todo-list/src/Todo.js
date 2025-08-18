import React, { Component } from "react";
import "./App.css";

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditting: false,
			task: this.props.task,
			completed: false,
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.editTodo(this.props.id, this.state.task);
		this.toggleForm();
	}

	handleRemove(e) {
		this.props.removeTodo(this.props.id);
	}
	toggleForm() {
		this.setState({ isEditting: !this.state.isEditting });
	}

	toggleComplete() {
		this.setState({ completed: !this.state.completed });
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	render() {
		let result;
		if (this.state.isEditting) {
			result = (
				<div className="todo">
					<form onSubmit={this.handleEdit}>
						<input
							type="text"
							value={this.state.task}
							name="task"
							onChange={this.handleChange}
						/>
						<button>
							<img
								className="icons"
								src="/save.png"
								alt="Save"
							/>
						</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="todo">
					<div
						className={this.state.completed ? "task-completed" : "task"}
						onClick={this.toggleComplete}
					>
						{this.props.task}
					</div>
					<div>
						<button onClick={this.toggleForm}>
							<img
								className="icons"
								src="/edit.png"
								alt="Edit"
							/>
						</button>
						<button onClick={this.handleRemove}>
							<img
								className="icons"
								src="/delete.png"
								alt="Delete"
							/>
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}
