import React from 'react';
import AddTodo from 'components/AddTodo/AddTodo.jsx';
import TodoList from 'components/TodoList/TodoList.jsx';
import TodoLeft from 'components/TodoLeft/TodoLeft.jsx';

function TodoProject()  {
  return <div>
    <AddTodo />
    <TodoList />
    <TodoLeft />
  </div>
}

export default TodoProject;