import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class PostsNew extends Component {
	renderField(field) {
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

		return <div className={className}>
			<label>{field.label}</label>
			<input
				className="form-control"
				type="text"
				// emit properties of this object as props to the input tag
				{...field.input}
			/>
			{/*// display error messages after the field has been edited (touched)*/}
			<div className="text-help">
				{field.meta.touched ? field.meta.error : ''}
			</div>
		</div>
	}

	onSubmit(values) {
		console.log(values)
	}

	render() {
		const { handleSubmit } = this.props;

		return <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<Field
				label="Title For Post"
				name="title"
				component={this.renderField}
			/>
			<Field
				label="Categories"
				name="categories"
				component={this.renderField}
			/>
			<Field
				label="Post Content"
				name="content"
				component={this.renderField}
			/>
			<button type="submit" className="btn btn-primary">Submit</button>
			<Link to="/" className="btn btn-danger">Cancel</Link>
		</form>
	}
}

// validate the values that the user has entered into form
function validate(values) {
	const errors = {};

	if (!values.title)
		errors.title = "Enter a title!";

	if (!values.categories)
		errors.categories = "Enter some categories!";

	if (!values.content)
		errors.content = "Enter some content!";

	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew)