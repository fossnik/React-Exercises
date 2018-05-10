/** State argument here is not the Application State, but rather only the piece of state
 * for which this reducer is responsible
 */

export default function(state = null, action) {
	// (state = null) is ES6 syntax to set the parameter to null by default
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	// (state = null) handles the initial case in which the book is not defined.
	return state;
}
