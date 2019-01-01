import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import TodoProject from 'pages/TodoProject/TodoProject.jsx';
import * as stores from './stores/stores';
import 'source/icon.js';
import './index.scss';

class App extends Component {
  render() {
    return <TodoProject />
  }
}



ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.querySelector('#root')
);