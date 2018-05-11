import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
	render() {
		if (!this.props.book)
			return <div>Select an item to get started</div>
		else
			return <div>
				<h3>Book Detail For:</h3>
				<div>{this.props.book.title}</div>
			</div>
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail)