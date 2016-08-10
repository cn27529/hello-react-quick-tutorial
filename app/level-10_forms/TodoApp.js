const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: props.todos
    };
  }

  updateTodosBy(updateFn) {
    return (...args) => {
      this.setState({
        todos: updateFn(this.state.todos, ...args)
      });
    };
  }

  render() {

    //const { todos } = this.state;
    const { appName, username, todos, ...other } = this.props;

    return (
      <div className="jumbotron">
        <TodoHeader
          title={appName}
          username={username}
          todoCount={todos.filter((todo) => !todo.completed).length}
        />
        <InputField appName={appName} username={username} todos={todos}
          onSubmitEditing={this.updateTodosBy(_createTodo)}
        />
        <TodoList
          todos={todos}
          onUpdateTodo={this.updateTodosBy(_updateTodo)}
          onToggleTodo={this.updateTodosBy(_toggleTodo)}
          onDeleteTodo={this.updateTodosBy(_deleteTodo)}
        />
      </div>
    );
  }
}


const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};

const _updateTodo = (todos, id, title) => {
  //alert(title);
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = title;
  return todos;
};

const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

window.App.TodoApp = TodoApp;
