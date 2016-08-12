const { TodoItem } = window.App;

class TodoList extends React.Component {

  //第一次 render 後，會被呼叫
  componentDidMount() {
    console.log("TodoList componentDidMount")
  }

  complmentWillMount(){
    console.log("TodoList complmentWillMount")
  }


  render() {

    const {
      todos,
      onUpdateTodo,
      onToggleTodo,
      onDeleteTodo
    } = this.props;

    const todoElements = todos.map((todo) => (

      <li className="list-group-item" key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onUpdate={(content) => onUpdateTodo && onUpdateTodo(todo.id, content)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
        />
      </li>

    ));

    return (
      <ul className="list-group">
        { todoElements }
      </ul>
    );

  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onUpdateTodo: React.PropTypes.func,
  onToggleTodo: React.PropTypes.func,
  onDeleteTodo: React.PropTypes.func
};

window.App.TodoList = TodoList;
