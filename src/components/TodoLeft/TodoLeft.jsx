import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './Style.scss';

function TodoLeft(props) {
  const todoList = props.todoList;
  return <div className="todo-left">
    {todoList.unfinished} item(s) unfinished
  </div>
}

export default inject('todoList')(observer(TodoLeft));