import React, { Component } from 'react';

export class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onClick={this.handleClick} />
                <label>{this.props.complete ? 'Done': 'Todo'}</label>
            </div>
        );
    }
}