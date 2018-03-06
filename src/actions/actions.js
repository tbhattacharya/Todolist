export const ADD_TODO = 'ADD_NEW';

/* Action creators */

export function addTodo(text) {
    return { type: ADD_TODO, text: text }
}