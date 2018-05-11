/** State argument here is not the Application State, but rather only the piece of state
 * for which this reducer is responsible
 */

export default function(state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;

		default:
			return state;
	}

}
