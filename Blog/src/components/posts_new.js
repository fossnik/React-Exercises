import React, { Component } from 'react'

// very similar to the redux 'connect' helper
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
	renderTitleField(field) {
		return <div className="form-group">
			<input
				className="form-control"
				type="text"
				// emit properties of this object as props to the input tag
				{...field.input}
			/>
		</div>
	}

	renderTagsField() {
		// not implemented
	}

	render() {
		return <form>
			<Field
				name="title"
				component={this.renderTitleField}
			/>
			<Field
				name="tags"
				component={this.renderTagsField}
			/>
		</form>
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew)