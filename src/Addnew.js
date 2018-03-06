import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './actions/actions';

export class Addnew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log('Prop 2', this.props);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleAdd() {
        this.props.handleAdd(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleAdd}> Add </button>
            </div>
        );
    }
}

