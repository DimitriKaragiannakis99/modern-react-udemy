class App extends React.Component {
	render() {
		return (
			<div>
				<Mood />
				<NumPicker />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
