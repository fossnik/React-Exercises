import React, { Component } from 'react'

// very similar to the redux 'connect' helper
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
	renderField(field) {
		return <div className="form-group">
			<label>{field.label}</label>
			<input
				className="form-control"
				type="text"
				// emit properties of this object as props to the input tag
				{...field.input}
			/>
		</div>
	}

	render() {
		return <form>
			<Field
				label="Title"
				name="title"
				component={this.renderField}
			/>
			<Field
				label="Tags"
				name="tags"
				component={this.renderField}
			/>
			<Field
				label="Post Content"
				name="content"
				component={this.renderField}
			/>
		</form>
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew)