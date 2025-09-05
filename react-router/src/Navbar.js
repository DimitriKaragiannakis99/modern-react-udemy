import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? "link active-link" : "link")}
			>
				Home
			</NavLink>

			<NavLink
				to="/dog"
				className={({ isActive }) => (isActive ? "link active-link" : "link")}
			>
				Dog
			</NavLink>

			<NavLink
				to="/contact"
				className={({ isActive }) => (isActive ? "link active-link" : "link")}
			>
				Contact
			</NavLink>
		</nav>
	);
}
