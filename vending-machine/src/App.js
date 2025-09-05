import Home from "./Home";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/soda"
					element={<Soda />}
				/>
				<Route
					path="/chips"
					element={<Chips />}
				/>
				<Route
					path="/sardines"
					element={<Sardines />}
				/>
			</Routes>
		</div>
	);
}

export default App;
