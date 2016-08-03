const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <TodoHeader />
        <InputField />
        <TodoList />
      </div>

    );
  }
}

window.App.TodoApp = TodoApp;
