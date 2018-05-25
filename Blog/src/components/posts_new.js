import React, { Component } from 'react'

// very similar to the redux 'connect' helper
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
	render() {
		return <form>
			<Field
				name="title"
				component={}
			/>
		</form>
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew)