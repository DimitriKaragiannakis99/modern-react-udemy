import "./App.css";
import Rando from "./Rando";
import BrokenClick from "./BrokenClick";

function App() {
	return (
		<div className="App">
			<Rando maxNum={10} />
			<BrokenClick />
		</div>
	);
}

export default App;
