class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Casino 🎰</h1>
				<Slot
					s1="🍊"
					s2="🍇"
					s3="🍊"
				/>
				<Slot
					s1="🍊"
					s2="🍊"
					s3="🍊"
				/>
				<Slot
					s1="🍊"
					s2="🍇"
					s3="🍇"
				/>
				<Friend
					name="Dimitri"
					hobbies={["Coding", "BJJ", "Reading", "Hockey"]}
				/>
				<Friend />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
