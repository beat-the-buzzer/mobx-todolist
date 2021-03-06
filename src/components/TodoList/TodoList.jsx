import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoItem from 'components/TodoItem/TodoItem.jsx';
import './Style.scss';

@inject('todoList')
@observer
class TodoList extends Component {

  render() {
    let todoList = this.props.todoList;
    let todos = todoList.todos;
    return <ul>
      {
        todos.map(value => {
          return <li key={value.id}>
              <TodoItem todo={value} />
              <span className="remove" onClick={()=>todoList.delTodo(value)}>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-remove"></use>
                </svg>
              </span>
            </li>
        })
      }
     
    </ul>
  }
}

export default TodoList;