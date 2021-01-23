import { observable, action, computed } from 'mobx';

class Todo {
  @observable id = Math.random();
  @observable title = "";
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action finishedToggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  @observable todos = [];
  @action createTodo(title) {
    this.todos.unshift(new Todo(title));
  }
  @action delTodo(todo) {
    // remove非数组自带方法，是mobx-react提供的
    this.todos.remove(todo);
  }
  // 计算属性
  @computed get unfinished() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

let todoList = new TodoList();

export  { todoList };