import { FETCH_WEATHER } from "../actions/index"

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// do not mutate state - return new state
			// return state.concat([ action.payload.data ]);

	//		ES-6 syntax
			return [ action.payload.data, ...state ];
	}

	return state;
}