import { connect } from 'react-redux'
import { ToDoList } from './ToDoList';
import { addTodo } from './actions/actions';
import { Addnew } from './Addnew';

function mapDispatchToProps(dispatch){
    return {
        handleAdd: text => dispatch(addTodo(text))
      };
}

const AddToList =  connect(
    null,
        mapDispatchToProps
    )(Addnew);
export default AddToList;
