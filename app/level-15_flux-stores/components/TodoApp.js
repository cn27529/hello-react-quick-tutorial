const {
  TodoActions,
  InputField,
  TodoHeader,
  TodoList
} = window.App;

const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};

const _updateTodo = (todos, id, title) => {
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

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: []
    };
  }

  //第一次 render 後，會被呼叫
  componentDidMount() {

    console.log("TodoApp componentDidMount")

    //讀取todos.json資料
    /**/
    fetch('./todos.json')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.todos);
        this.setState({ todos: data.todos });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  complmentWillMount(){
    console.log("TodoApp complmentWillMount")
  }

  updateTodosBy(updateFn) {
    return (...args) => {
      this.setState({
        todos: updateFn(this.state.todos, ...args)
      });
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoHeader
          title="我的待辦清單"
          username="Jason"
          todoCount={todos.filter((todo) => !todo.completed).length}
        />
        <InputField
          placeholder="新增待辦清單"
          onSubmitEditing={TodoActions.createTodo}
        />
        <TodoList
          todos={todos}
          onUpdateTodo={TodoActions.updateTodo}
          onToggleTodo={TodoActions.toggleTodo}
          onDeleteTodo={TodoActions.deleteTodo}
        />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
