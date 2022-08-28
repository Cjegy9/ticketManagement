import React, { Component } from 'react';


export default class Input extends Component {

	render() {
		return (
			<div>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<input type="text" className="form-control" placeholder="Username" />
					<input type="password" className="form-control" placeholder="Password" />
					<button className="btn btn-primary">Login</button>
				</div>
			</div>
		);
	}
}