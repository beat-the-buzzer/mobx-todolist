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

  return <form onSubmit={handleSubmit}>
    <input className="addTodo" type="text" value={inputValue} placeholder="请输入待办项" onChange={handleChange}/>
    <button type="submit">提交</button>
  </form>
}

// 该组件不会因为todoList的改变而重新刷新，因此不需要进行观测
// 另外，如果这里写成:
// export default inject('todoList')(observer(AddTodo));
// 会报错；
// 写成:
// export default observer(inject('todoList')(AddTodo));
// 会有警告;

// 同时，如果在AddTodo这个组件里面新增属性访问:
// {props.todoList.unfinished}
// 该属性不会受其他组件控制

export default inject('todoList')(AddTodo);