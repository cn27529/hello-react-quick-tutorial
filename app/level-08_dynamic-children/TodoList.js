const { TodoItem } = window.App;

class TodoList extends React.Component {

  render() {

    const { appName, username, todos, ...other } = this.props;

    const todoElements = todos.map((todo)=>(
      <TodoItem
      id={todo.id}
      title={todo.title}
      completed={todo.completed} />
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
