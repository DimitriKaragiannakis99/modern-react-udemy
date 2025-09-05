import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Food.css";

function Food() {
	const { name } = useParams(); // extracts parameter name from the route params
	const [imgURL, setImgURL] = useState("");

	useEffect(() => {
		async function getFoodImageURL() {
			console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);
			const response = await fetch(
				`https://api.unsplash.com/photos/random?query=${name}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
			);
			const data = await response.json();
			console.log(data);

			setImgURL(data.urls.regular);
		}

		getFoodImageURL();
	}, [name]);

	return (
		<div className="food-box">
			<h1>I love to eat {name}</h1>
			{imgURL && (
				<img
					src={imgURL}
					alt={name}
					className="food-img"
				/>
			)}
		</div>
	);
}

export default Food;
