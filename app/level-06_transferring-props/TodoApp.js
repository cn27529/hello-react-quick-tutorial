const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  render() {

    const { appName, todos, ...rest } = this.props;


const{appName, todos, firstName, lastName}=this.props;

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
