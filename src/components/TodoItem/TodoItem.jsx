import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Style.scss';

function TodoItem(props) {
  const handleChange = (e) => {
    props.todo.finishedToggle();
  }
  const todo = props.todo;
  return <span className="todo-item">
    <input type="checkbox" className="toggle" checked={todo.finished} onChange={(e) => handleChange(e)} />
    <span className={`todo-title ${todo.finished ? `finished` : ``}`}>{todo.title}</span>
  </span>
}

export default observer(TodoItem);