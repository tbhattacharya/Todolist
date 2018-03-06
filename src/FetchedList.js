import { connect } from 'react-redux'
import { ToDoList } from './ToDoList';

const mapStateToProps = state => {
    return {
        todoList: state
    }
  }

const FetchedList = connect(
    mapStateToProps
)(ToDoList);

export default FetchedList;
