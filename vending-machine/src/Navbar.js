import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "link active-link" : "link")}
				>
					Home
				</NavLink>
				<NavLink
					to="/soda"
					className={({ isActive }) => (isActive ? "link active-link" : "link")}
				>
					Soda
				</NavLink>
				<NavLink
					to="/chips"
					className={({ isActive }) => (isActive ? "link active-link" : "link")}
				>
					Chips
				</NavLink>
				<NavLink
					to="/sardines"
					className={({ isActive }) => (isActive ? "link active-link" : "link")}
				>
					Sardines
				</NavLink>
			</nav>
		);
	}
}
