import { ADD_TODO } from "../actions/actions";

export function addItem(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { value: action.text, complete: false }];
            break;
        default:
            return state;
    }
}
