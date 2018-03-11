export const ADD_TODO = 'ADD_NEW';
export const SHOW_WEATHER = 'SHOW_WEATHER';

/* Action creators */

export function addTodo(text) {
    return { type: ADD_TODO, text: text }
}

export function fetchWeather(lat, long) {
    return dispatch => {
        return fetch('https://api.darksky.net/forecast/0db9bc422aa227d5f13ad09ea75e52bd/37.8267,-122.4233')
            .then(response => response.json())
            .then(json => dispatch(showWeather(json)))
    }
}

export function showWeather(json) {
    return { type: SHOW_WEATHER, json: json }
}