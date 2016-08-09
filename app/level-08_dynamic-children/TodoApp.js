const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  render() {

    const { appName, username, todos, ...other } = this.props;

    return (
      <div className="jumbotron">
        <TodoHeader {...this.props} />
        <InputField appName={appName} username={username} todos={todos} />
        <TodoList appName={appName} username={username} todos={todos}  />
      </div>

    );
  }
}

window.App.TodoApp = TodoApp;
