const { TodoItem } = window.App;

class TodoList extends React.Component {

  render() {

    const {
      appName,
      username,
      todos,
      ...other,
      onDeleteTodo
    } = this.props;

    //const { onDeleteTodo } = this.props;

    const todoElements = todos.map((todo)=>(
      <TodoItem
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      //
      onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
      />
    ))

    //console.log(todoElements)

    return (
      <ul className="list-group">
        {todoElements}
      </ul>
    );

  }

}

window.App.TodoList = TodoList;
