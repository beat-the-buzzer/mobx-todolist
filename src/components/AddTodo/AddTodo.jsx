import React, { Component } from 'react';
import { observer,inject} from 'mobx-react';
import './Style.scss';

@inject('todoList')
@observer
class AddTodo extends Component {
  state = {
    inputValue: ''
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = this.state.inputValue.trim();
    if(inputValue) {
      this.props.todoList.createTodo(inputValue);
      this.setState({
        inputValue: ''
      });
    } else {
      alert('输入不能为空！！');
    }
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input className="addTodo" type="text" value={this.state.inputValue} placeholder="请输入待办项" onChange={this.handleChange}/>
      <button type="submit">提交</button>
    </form>
  }
}

export default AddTodo;