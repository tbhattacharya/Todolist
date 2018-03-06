import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoList } from './ToDoList';
import FetchedList from './FetchedList';
import AddToList from './AddToList';

class App extends Component {
  todos = [{
    value: "First",
    complete: true
  },
  {
    value: "Second",
    complete: true
  },
  {
    value: "Third",
    complete: false
  }];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">To do list</h4>
        </header>
        <FetchedList />
        <AddToList />
      </div>
    );
  }
}

export default App;
