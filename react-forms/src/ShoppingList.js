import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

export default class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ name: "Milk", qty: "2 gallons", id: uuid() },
				{ name: "Bread", qty: "3 loaves", id: uuid() },
			],
		};
		this.renderList = this.renderList.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	addItem(item) {
		let newItem = { ...item, id: uuid() };
		this.setState((st) => {
			return {
				items: [...st.items, newItem],
			};
		});
	}

	renderList() {
		return (
			<ul>
				{this.state.items.map((item) => (
					<li key={item.id}>
						{item["name"]} : {item["qty"]}
					</li>
				))}
			</ul>
		);
	}
	render() {
		return (
			<div>
				<h1>Shopping List 🍎</h1>
				{this.renderList()}
				<ShoppingListForm addItem={this.addItem} />
			</div>
		);
	}
}
