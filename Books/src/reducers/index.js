import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({

	/** each Reducer adds a Key to our Global Application State
	 * thusly:
	 * 	<AppState Key> : <what the discrete Reducer passes back>
	 */

	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer
