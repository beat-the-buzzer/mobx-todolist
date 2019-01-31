### 从零开始使用Mobx实现一个TodoList

#### 项目新建

	npm init -y
	npm install webpack webpack-cli -D
	// webpack

	npm install babel-core babel-preset-env babel-loader -D
	npm install babel-loader@7 -D
	npm install babel-plugin-transform-class-properties -D
	npm install babel-plugin-transform-decorators-legacy -D
	npm install babel-preset-react -D
	// babel

	npm install react react-dom mobx-react mobx -S
	// react & mobx

	npm install sass-loader css-loader style-loader -D
	npm install node-sass -g
	npm install node-sass -D
	// scss & css

#### webpack配置

这个例子的`webpack`配置完全是手写的，但是没有配置`webpack-dev-server`，只能访问打包后的静态资源。

	const path = require('path');
	
	const config = {
	  mode: 'development',
	  entry: path.resolve(__dirname,'src/index.jsx'), 
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
	  },
	  // 项目入口和生成的资源文件的地址
	  resolve: {
	    alias: {
	      components: path.resolve(__dirname, 'src/components/'),
	      pages: path.resolve(__dirname, 'src/pages'),
	      source: path.resolve(__dirname, 'src/source')
	    }
	  },
	  // 定义别名，这样在页面中可以直接引用到对应的文件，不需要写大量的"../../"去找文件
	  module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['env','react'],
	            plugins: ['transform-decorators-legacy','transform-class-properties']
	          }
	        }
	      },
		  // 配置babel，包括ES6、react编译，另外，需要一些编译插件，例如装饰器，注意插件的位置，是从右到左加载的，参考下面对CSS的处理
	      {
	        test: /\.scss/,
	        use: ['style-loader','css-loader','sass-loader']
	      }
		  // loader和plugins都是从右到左加载的
	    ]
	  },
	  devtool: 'inline-source-map'
	};
	
	module.exports = config;

#### store文件

由于这个项目很简单，只有一个store，所以我直接在`store.js`里面`export`了，事实上，我们应该创建文件`todoList.js`，然后在`store.js`里面`import`和`export`。

	// stores/todoList.js
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
	
	export default class TodoList {
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

	// stores/store.js ->总的store合一起
	import TodoList from './TodoList.js';
	const todoList = new TodoList();
	export  { todoList };

#### TodoProject

项目一共有三个模块，分别是添加待办项“AddTodo”，展示待办项“TodoList”，展示未完成数量“TodoLeft”

- `@inject('todoList');` // 有了这一行，就可以这样使用store了：`this.props.todoList`

- `@observer` // 使用这个来装饰类，编译插件是：`babel-plugin-transform-decorators-legacy`

- 定义state的方法：这里没有使用constructor，而是直接赋值，这种写法在`antd-mobile`编译插件是：`babel-plugin-transform-class-properties`

我们实际上一直在做的事其实很简单，只需要弄清楚这几件事：

1、如何访问store里面存的数据(可观察数据`observable value`)； 

2、如何改变可观察数据（`action`）；

3、使用衍生的计算值（`computed value`）

#### mobx额外的方法

主要是`Mobx`提供的一些API：

[https://github.com/beat-the-buzzer/mobx-demo](https://github.com/beat-the-buzzer/mobx-demo)

#### 项目演示

[https://beat-the-buzzer.github.io/mobx-todolist/](https://beat-the-buzzer.github.io/mobx-todolist/)

