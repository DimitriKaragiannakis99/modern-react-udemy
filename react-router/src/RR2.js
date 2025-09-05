import { Component } from "react";
import Food from "./Food";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import FoodSearch from "./FoodSearch";

export default class RR2 extends Component {
	render() {
		return (
			<div>
				<Routes>
					<Route
						path="/"
						element={<FoodSearch />}
					/>
					<Route
						path="/food/:name"
						element={<Food />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</div>
		);
	}
}
