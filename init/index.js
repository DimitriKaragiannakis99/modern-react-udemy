class Hello extends React.Component {
	// All class components must implement the render method to return html
	render() {
		return (
			<div>
				<h1>Hellooooo</h1>
				<h1>Hellooooo</h1>
				<h1>Hellooooo</h1>
			</div>
		);
	}
}

function Bye() {
	return (
		<div>
			<h1>GoodBYE</h1>
			<h1>GoodBYE</h1>
		</div>
	);
}

ReactDOM.render(<Hello />, document.getElementById("root"));
ReactDOM.render(<Bye />, document.getElementById("root2"));
