class Friend extends React.Component {
	static defaultProps = {
		name: "Joe",
		hobbies: ["hobby1", "hobby2"],
	};
	render() {
		const { name, hobbies } = this.props;
		return (
			<div>
				<h1>{name}</h1>
				<ul>
					{hobbies.map((h) => (
						<li>{h}</li>
					))}
				</ul>
			</div>
		);
	}
}
