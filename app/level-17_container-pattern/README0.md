##加入 TodoHeaderContainer

```js
const {
  TodoStore,
  TodoHeader
} = window.App;

class TodoHeaderContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { todos: TodoStore.getAll() };
  }

  componentDidMount() {
    this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todos: TodoStore.getAll() })
    );
  }

  componentWillUnmount() {
    this._removeChangeListener();
  }

  render() {
    return (
      <TodoHeader
        title="我的待辦清單"
        username="Jason"
        todoCount={this.state.todos.filter((todo) => !todo.completed).length}
      />
    );
  }
}

window.App.TodoHeaderContainer = TodoHeaderContainer;


```

##加入 CreateTodoFieldContainer

```js
const {
  TodoActions,
  InputField
} = window.App;

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
        onSubmitEditing={TodoActions.createTodo}
      />
    );
  }
}

window.App.CreateTodoFieldContainer = CreateTodoFieldContainer;

```

##加入 TodoListContainer
```js
const {
  TodoActions,
  TodoStore,
  TodoList
} = window.App;

class TodoListContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { todos: TodoStore.getAll() };
  }

  componentDidMount() {
    this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todos: TodoStore.getAll() })
    );
  }

  componentWillUnmount() {
    this._removeChangeListener();
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        onUpdateTodo={TodoActions.updateTodo}
        onToggleTodo={TodoActions.toggleTodo}
        onDeleteTodo={TodoActions.deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = TodoListContainer;

```
##修改 TodoApp
```js
const {
  TodoActions,
  CreateTodoFieldContainer,
  TodoHeaderContainer,
  TodoListContainer
} = window.App;

class TodoApp extends React.Component {
  componentDidMount() {
    TodoActions.loadTodos();
  }

  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <CreateTodoFieldContainer />
        <TodoListContainer />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;


```
## html放的有順序

```html
<script type="text/babel" src="./components/InputField.js"></script>
<script type="text/babel" src="./components/CreateTodoFieldContainer.js"></script><!--level 17-->
<script type="text/babel" src="./components/TodoHeader.js"></script>
<script type="text/babel" src="./components/TodoHeaderContainer.js"></script><!--level 17-->
<script type="text/babel" src="./components/TodoItem.js"></script>
<script type="text/babel" src="./components/TodoList.js"></script>
<script type="text/babel" src="./components/TodoListContainer.js"></script><!--level 17-->
<script type="text/babel" src="./components/TodoApp.js"></script>
```
