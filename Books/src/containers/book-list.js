import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from "../actions"
import { bindActionCreators } from 'redux'

// connect takes a function and a component and produces a CONTAINER

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
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

// anything returned from this function will end up as props on the bookList container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)