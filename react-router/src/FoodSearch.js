import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FoodSearch() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleClick = () => {
		// normally you’d save to a DB
		alert(`Saved ${query} to DB!`);

		// then redirect
		navigate(`/food/${query}`);
	};

	return (
		<div>
			<h1>Search for Food!</h1>
			<input
				type="text"
				placeholder="search for food"
				value={query}
				onChange={handleChange}
			/>
			<Link to={`/food/${query}`}>GO!</Link>
			<button onClick={handleClick}>Save Food!</button>
		</div>
	);
}
