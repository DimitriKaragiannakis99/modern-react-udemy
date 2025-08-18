import React, { Component } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{ id: uuid(), task: "walk the cat" }],
		};
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
	}

	editTodo(id, newTask) {
		this.setState((st) => {
			return {
				todos: [...st.todos].map((td) =>
					td.id === id ? { ...td, task: newTask } : td
				),
			};
		});
	}

	removeTodo(id) {
		this.setState((st) => {
			return {
				todos: [...st.todos].filter((td) => td.id !== id),
			};
		});
	}

	addTodo(task) {
		let td = { id: uuid(), task: task, completed: false };
		this.setState((st) => {
			return {
				todos: [...st.todos, td],
			};
		});
	}

	render() {
		const todos = this.state.todos.map((td) => (
			<Todo
				key={td.id}
				id={td.id}
				task={td.task}
				removeTodo={this.removeTodo}
				editTodo={this.editTodo}
			/>
		));
		return (
			<div className="todo-list">
				<h1>
					Todo List <span>A simple todo list created with React.</span>
				</h1>
				{todos}
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}
