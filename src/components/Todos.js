import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

//const [items, setItems] = useState([]);
class Todos extends Component {
    
   
  render() {
      
    return this.props.todos.map((todo) =>(
        <div className="container todo-bg border-bottom px-0">
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        </div>
        
    ));
      
  }
  
}
//Prop-types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
export default Todos;
