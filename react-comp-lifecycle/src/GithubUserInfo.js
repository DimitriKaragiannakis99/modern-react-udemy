import axios from "axios";
import React, { Component } from "react";

export default class GithubUserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			imgURL: "",
			company: "",
		};
	}

	async componentDidMount() {
		const gitURL = `https://api.github.com/users/${this.props.username}`;
		let resp = await axios.get(gitURL);
		let data = resp.data;
		this.setState({
			imgURL: data.avatar_url,
			name: data.name,
			company: data.company,
		});
	}
	render() {
		return (
			<div>
				<h1>Github User: {this.state.name}</h1>
				<img
					src={this.state.imgURL}
					alt="Github Avatar"
				/>
				<h2>{this.state.company}</h2>
			</div>
		);
	}
}
