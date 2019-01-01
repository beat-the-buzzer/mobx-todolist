import React, { Component } from 'react';
import AddTodo from 'components/AddTodo/AddTodo.jsx';
import TodoList from 'components/TodoList/TodoList.jsx';
import TodoLeft from 'components/TodoLeft/TodoLeft.jsx';


class TodoProject extends Component {
  render() {
    return <div>
      <AddTodo />
      <TodoList />
      <TodoLeft />
    </div>
  }
}

export default TodoProject;