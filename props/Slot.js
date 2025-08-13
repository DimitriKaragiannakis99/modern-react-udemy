class Slot extends React.Component {
	render() {
		let s1 = this.props.s1;
		let s2 = this.props.s2;
		let s3 = this.props.s3;
		let match = s1 === s2 && s2 === s3;

		let winner = { color: "green" };
		let loser = { color: "red" };
		return (
			<div className="Slot">
				<div style={{ fontSize: "32px" }}>
					{s1} {s2} {s3}
				</div>
				<div style={match ? winner : loser}>
					{match ? "WINNER 👍" : "LOSER 😡"}
				</div>
			</div>
		);
	}
}
