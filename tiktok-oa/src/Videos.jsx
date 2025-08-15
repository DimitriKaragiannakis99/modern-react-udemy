import React, { useEffect, useState } from "react";
/**
 * Task:
 * Write a function topLiked(videos, n) that returns the titles of the top n videos sorted by likes in descending order.
 */

const Videos = ({ n }) => {
	const [topVideos, setTopVideos] = useState([]);

	const videos = [
		{ id: 1, title: "Dancing Cat", likes: 10 },
		{ id: 2, title: "Coding Tips", likes: 50 },
		{ id: 3, title: "Funny Dogs", likes: 30 },
	];

	function topLiked(videos, n) {
		return [...videos] // copy so we don’t mutate
			.sort((a, b) => b.likes - a.likes)
			.slice(0, n)
			.map((v) => v.title);
	}

	useEffect(() => {
		const result = topLiked(videos, n);
		setTopVideos(result);
	}, []);
	return (
		<div>
			<ul>
				{topVideos.map((title, i) => (
					<li key={i}>{title}</li>
				))}
			</ul>
		</div>
	);
};

export default Videos;
