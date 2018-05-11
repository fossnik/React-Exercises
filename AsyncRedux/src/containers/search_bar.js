import React, { Component } from 'react'

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		// defaults to empty string
		this.state = { term: '' };

		// binds component state to onInputChange method (makes state context accessible)
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	// prevent form submission (because single page application)
	// this is needed when using a <form> tag
	static onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return <form onSubmit={SearchBar.onFormSubmit} className="input-group">
			<input
				placeholder="Get a five-day forecast in your favorite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange}
				/>
			<span className="input-group-btn">
				<button type="submit" className="btn btn-secondary">Submit</button>
			</span>
		</form>
	}
}