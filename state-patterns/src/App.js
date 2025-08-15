import Lottery from "./components/Lottery";
import CoinFlip from "./components/CoinFlip";
import ColorBox from "./components/ColorBox";
import "./styles/App.css";

function App() {
	return (
		<div className="ColorBox">
			{/* <Lottery />
			<Lottery
				title="Mini"
				numBalls={4}
				maxNum={10}
			/> */}
			{/* <CoinFlip /> */}
			{Array.from({ length: 16 }, (_, i) => (
				<ColorBox key={i} />
			))}
		</div>
	);
}

export default App;
