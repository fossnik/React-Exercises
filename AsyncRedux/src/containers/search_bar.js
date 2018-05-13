import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from "../actions"

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// defaults to empty string
		this.state = { term: '' };

		// binds component state to onInputChange method (makes state context accessible)
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	onFormSubmit(event) {
		// prevent form submission (because single page application)
		// this is needed when using a <form> tag
		event.preventDefault();

		// calls the action mapped in by mapDispatchToProps
		this.props.fetchWeather(this.state.term);

		// clear search-bar input
		this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// null says "thanks, but we don't care about state"
// this connects our action creator to this container
export default connect(null, mapDispatchToProps)(SearchBar)