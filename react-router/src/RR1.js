import React, { Component } from "react";
import Dog from "./Dog";
import Contact from "./Contact";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

export default class RR1 extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/dog"
						element={<Dog name="Buddy" />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</div>
		);
	}
}
