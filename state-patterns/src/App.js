import Lottery from "./components/Lottery";
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<Lottery />
			<Lottery
				title="Mini"
				numBalls={4}
				maxNum={10}
			/>
		</div>
	);
}

export default App;
