function getMood() {
	const moods = ["Angry", "Happy", "Sad", "Hungry", "Paranoid"];
	const idx = Math.floor(Math.random() * moods.length);
	return [idx, moods[idx]];
}

class Mood extends React.Component {
	render() {
		const moodGifs = [
			"https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eG93cHV3ZnlxOHlkZTB1dHlncHBnZ3prcnUwYnowYXFha3U2ejZtbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o9bJX4O9ShW1L32eY/giphy.webp",
			"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGdweTgxNzJyZ2ZndW5uMG1kNHFrcXhrcG95cTZnbXBla2QyNzdpeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/R6gvnAxj2ISzJdbA63/giphy.webp",
			"https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Mnk0eHg0cDJvbWQ5bTk1cmMyNjlmNmoxcTc2MzIydmF2MTM4ZGw5eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1yjaiH3tUlWSAsMGYv/200.webp",
			"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hibDhqOHd1bGRvczFqd29nNW5sc2o3Y2o5a2xmeThoaHhnY3RubCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vdbrUjzrUEGly/200.webp",
			"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGdweTgxNzJyZ2ZndW5uMG1kNHFrcXhrcG95cTZnbXBla2QyNzdpeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3gNotAoIRZsb9UHPnj/200.webp",
		];
		const [idx, mood] = getMood();
		return (
			<div>
				<h1>My mood: {mood}</h1>
				<img
					src={moodGifs[idx]}
					alt="GIFFY"
				/>
			</div>
		);
	}
}
