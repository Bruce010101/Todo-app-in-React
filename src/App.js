import React, { Component } from 'react';
//import "./components/FontawesomeIcons/Index";
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
//import { v4 as uuidv4 } from 'uuid';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos:[]
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({ todos: res.data }))
}

//completed-switcher
markComplete =(id) => {
  this.setState({todos: this.state.todos.map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}

//Delete-Todo
delTodo = (id) =>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo=> todo.id !== id)]}));
  
}

//Add-Todo crate post request to JSONplaceholder
addTodo =(title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    })
    .then(res =>this.setState({ todos: [...this.state.todos, res.data] }));
}

  //delete container create seperate header with add todos
  render() {
    return (
      <div className="App">
      <Header /> 
      <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}
      />
      </div>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
