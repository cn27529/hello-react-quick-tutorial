const {
  TodoActions,
  CreateTodoFieldContainer,
  TodoHeaderContainer,
  TodoListContainer,
  InputField,
} = window.App;

class TodoApp extends React.Component {

  componentDidMount() {
    TodoActions.loadTodos();
  }

  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <InputField
          placeholder="新增待辦清單"
          onSubmitEditing={TodoActions.createTodo}
        />
        <TodoListContainer />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
