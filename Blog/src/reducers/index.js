import { combineReducers } from 'redux'

// alias syntax: renaming recommended - "reducer" too generic
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer,
});

export default rootReducer