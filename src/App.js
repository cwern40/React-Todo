import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "React",
          id: 561268465,
          completed: false,
        }
      ],
      todo: '',
    };
  };

  submitHandler = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

 changeHandler = event => this.setState({ [event.target.name]: event.target.value });

 toggleComplete = id => {
   const newList = this.state.todos.map(item => {
     if(item.id === id) {
       const newObj = {
         ...item,
         completed: !item.completed
       };
       return newObj;
     } else {
       return item;
     }
   });
   
   this.setState({ todos: newList });
 };

 clearComplete = () => {
   const notcomplete = this.state.todos.filter(item => item.completed === false);

   this.setState({
     todos: notcomplete
   });
 };

  render() {
    return (
      <div>
         <TodoList todos={this.state.todos} toggle={this.toggleComplete}/>
        <TodoForm value={this.state.todo} changeTodo={this.changeHandler} addTodo={this.submitHandler} clear={this.clearComplete}/>
      </div>
    );
  }
}

export default App;
