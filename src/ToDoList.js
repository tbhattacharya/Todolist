import React, { Component } from 'react';
import { TodoItem } from './TodoItems';

export class ToDoList extends Component{

    constructor(props){
    super(props);
    console.log('Prop ', this.props);
    }


    render(){
        return (
            this.props.todoList.map(todo =>{
                return <TodoItem value={todo.value} complete={todo.complete} />
            })
        );
    }
}

