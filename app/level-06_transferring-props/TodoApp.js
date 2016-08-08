const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  render() {

    const { appName, username, todos, undones, ...other } = this.props;

    return (
      <div className="jumbotron">
        <TodoHeader appName={appName} username={username} todos={todos} undones={undones} />
        <InputField appName={appName} username={username} todos={todos} undones={undones} />
        <TodoList appName={appName} username={username} todos={todos} undones={undones} />
      </div>

    );
  }
}

window.App.TodoApp = TodoApp;
