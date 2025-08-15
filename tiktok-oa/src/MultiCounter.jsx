import React, { useState } from "react";
import "./App.css";

/**
 * Requirements:
 * Create a React functional component called MultiCounter.
 * It should render a number initialized at 0 and 3 buttons: +1, +2, +3.
 * Clicking a button should increase the counter by the respective value.
 * Clicking a “Reset” button should reset the counter to 0.
 * Extra challenge: Prevent the counter from going above 10.
 */

const MultiCounter = () => {
	const [num, setNum] = useState(0);

	function handleAddClick(e) {
		let id = e.target.id;
		let add = parseInt(id[3]);
		if (num + add > 10) {
			alert("Number went above 10! Resetting....");
			setNum(0);
		} else {
			setNum(num + add);
		}
	}

	function handleReset(e) {
		setNum(0);
	}

	return (
		<div className="MultiCounter">
			<div>Number: {num}</div>
			<div className="addButtons">
				<button
					id="btn1"
					onClick={handleAddClick}
				>
					+1
				</button>
				<button
					id="btn2"
					onClick={handleAddClick}
				>
					+2
				</button>
				<button
					id="btn3"
					onClick={handleAddClick}
				>
					+3
				</button>
				<button
					id="reset"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default MultiCounter;
