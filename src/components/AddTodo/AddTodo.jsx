import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import './Style.scss';

function AddTodo(props) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!!inputValue.trim()) {
      props.todoList.createTodo(inputValue.trim());
      setInputValue('');
    } else {
      alert('输入不能为空！！');
    }
  }

  return (<form onSubmit={(e) => handleSubmit(e)}>
    <input className="addTodo" type="text" value={inputValue} placeholder="请输入待办项" onChange={(e) => handleChange(e)}/>
    <button type="submit">提交</button>
  </form>)
}

// export default inject('todoList')(observer(AddTodo));
export default observer(inject('todoList')(AddTodo));