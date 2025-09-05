import React from "react";

class Dog extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>DOG!!!</h1>
					<h3>This dog is named {this.props.name}</h3>
					<img
						src="https://plus.unsplash.com/premium_photo-1756298029584-ba548b35a732?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3MlMjBpbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D"
						alt="dog"
					/>
				</div>
			</div>
		);
	}
}

export default Dog;
