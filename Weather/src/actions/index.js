import axios from 'axios'

const API_KEY = '5ecf18f5f1b241c25bba9ba10cc4d173';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forcast?appid=${API_KEY}`;

// helps keep our action types consistent between our action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		// an action always has to have a type
		type: FETCH_WEATHER,
		payload: request
	}
}
