import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeBoard.css";

const JOKE_API = "https://icanhazdadjoke.com/";

async function getJoke() {
	return (
		await axios.get(JOKE_API, {
			headers: {
				Accept: "application/json",
			},
		})
	).data;
}

function updateLocalStorage(jokes) {
	localStorage.setItem("jokes", JSON.stringify(jokes));
}

export default class JokeBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jokes: [],
		};
		this.seenJokes = new Set(this.state.jokes.map((j) => j.joke));
		this.getNewJokes = this.getNewJokes.bind(this);
		this.handleVote = this.handleVote.bind(this);
	}

	// Will run once upon mount and generate 5 jokes
	async componentDidMount() {
		let jokes;
		// check localstorage
		if (!localStorage.getItem("jokes")) {
			jokes = await this.getJokes();

			// update state
			this.setState(
				{
					jokes: jokes,
				},
				() => updateLocalStorage(jokes)
			);
		} else {
			jokes = JSON.parse(localStorage.getItem("jokes"));
			if (!Array.isArray(jokes)) {
				jokes = [jokes];
			}
			this.setState({ jokes });
		}
	}

	async getJokes() {
		// call our api to populate joke board
		let jokes = [];
		let joke;
		while (jokes.length < 5) {
			joke = await getJoke();
			if (!this.seenJokes.has(joke)) {
				jokes.push({
					id: joke.id,
					joke: joke.joke,
					rating: 0,
				});
			}
		}
		return jokes;
	}

	// generate 5 new jokes on click
	async getNewJokes() {
		let newJokes = await this.getJokes();

		this.setState(
			(st) => ({
				jokes: [...st.jokes, ...newJokes],
			}),
			() => updateLocalStorage(this.state.jokes)
		);
	}

	handleVote(id, delta) {
		this.setState(
			(st) => ({
				jokes: st.jokes.map((joke) =>
					joke.id === id ? { ...joke, rating: joke.rating + delta } : joke
				),
			}),
			() => updateLocalStorage(this.state.jokes)
		);
	}

	render() {
		const jokes = this.state.jokes
			.sort((a, b) => b.rating - a.rating)
			.map((joke, idx) => (
				<Joke
					key={idx}
					joke={joke.joke}
					rating={joke.rating}
					upvote={() => this.handleVote(joke.id, 1)}
					downvote={() => this.handleVote(joke.id, -1)}
				/>
			));
		return (
			<div className="JokeBoard">
				<div className="JokeBoard-sidebar">
					<h1 className="JokeBoard-title">
						<span>Dad</span>Jokes
					</h1>
					<img
						src="https://cdn-icons-png.flaticon.com/128/4160/4160718.png"
						alt="laughing-emoji"
					/>
					<button onClick={this.getNewJokes}>Generate New Jokes🤣</button>
				</div>

				<div className="JokeBoard-jokes">
					{this.state.jokes.length !== 0 && jokes}
				</div>
			</div>
		);
	}
}
