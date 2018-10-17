import React, { Component } from 'react';
import './index.less';

class Com extends Component {
	constructor() {
		super();
	}
	handleClick = async () => {
		await new Promise(() => {
			console.log("ajax.....");
		})
	}
	render() {
		return (
			<div onClick={this.handleClick}>this is test </div>
		);
	}
}
export default Com;
