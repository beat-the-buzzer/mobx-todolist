import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Style.scss';

@observer
class TodoItem extends Component {

  handleChange = (e) => {
    this.props.todo.finishedToggle();

  }

  render() {
    const todo = this.props.todo;
    return <span className="todo-item">
      <input type="checkbox" className="toggle" checked={todo.finished} onChange={this.handleChange} />
      <span className={`todo-title ${todo.finished ? `finished` : ``}`}>{todo.title}</span>
    </span>
  }
}

export default TodoItem;