import React, { Component } from 'react'
import { connect } from 'react-redux'

// connect takes a function and a component and produces a CONTAINER

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// what is returned will be the props inside of BookList
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookList)