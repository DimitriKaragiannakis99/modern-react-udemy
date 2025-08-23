import React, { Component } from "react";
import "./Deck.css";
import Card from "./Card";
import axios from "axios";

const CARD_API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";
const GET_CARD_API_URL = "https://deckofcardsapi.com/api/deck/";

export default class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: null,
			cards: [],
		};
		this.drawCard = this.drawCard.bind(this);
	}

	/**
	 * Get deck id from API and update state
	 * Get Card from api and update child component and state
	 */
	async componentDidMount() {
		let deck = (await axios.get(CARD_API_URL)).data;
		this.setState({
			deck: deck,
		});
	}

	async drawCard() {
		try {
			let cardResponse = (
				await axios.get(`${GET_CARD_API_URL}/${this.state.deck.deck_id}/draw/`)
			).data;

			let card = cardResponse.cards[0];
			if (!cardResponse.success) {
				throw new Error("Out of cards");
			}
			this.setState((st) => ({
				cards: [
					...st.cards,
					{
						id: card.code,
						img: card.image,
						name: `${card.value} of ${card.suit}`,
					},
				],
			}));
		} catch (err) {
			alert(err);
		}
	}
	render() {
		const cards = this.state.cards.map((c) => (
			<Card
				key={c.id}
				img={c.img}
				alt={c.alt}
			/>
		));
		return (
			<div className="Deck">
				<div className="Header">
					<h1>♦︎Card Dealer♣︎</h1>
					<button onClick={this.drawCard}>Deal me a card!</button>
				</div>
				<div>{this.state.cards.length !== 0 && cards}</div>
			</div>
		);
	}
}
