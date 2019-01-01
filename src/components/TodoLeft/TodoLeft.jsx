import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './Style.scss';

@inject('todoList')
@observer
class TodoLeft extends Component {
  render() {
    const todoList = this.props.todoList;
    return <div className="todo-left">
      {todoList.unfinished} item(s) unfinished
    </div>
  }
}

export default TodoLeft;