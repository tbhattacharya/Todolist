import { ADD_TODO } from "../actions/actions";
import { SHOW_WEATHER } from "../actions/actions";
import { combineReducers } from 'redux'

export function addItem(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { value: action.text, complete: false }];
            break;
        default:
            return state;
    }
}

export function showWeather(state = {summary: ''}, action){
    switch (action.type) {
        case SHOW_WEATHER:
            let a = Object.assign({}, state, { summary: action.json['currently']['summary']});
            console.log('New ', a);
            return a;
            break;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    addItem,
    showWeather
  })
