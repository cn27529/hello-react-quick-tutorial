const { TodoItem } = window.App;

class TodoList extends React.Component {

  render() {

    const { appName, username, todos, undones, ...other } = this.props;

    const todoElements = todos.map((todo)=>(
      <li key={todo.id}>
        <TodoItem
        title={todo.title}
        completed={todo.completed} />
      </li>
    ));
    return (
      <ul className="list-group">
        {todoElements}
      </ul>
    );

  }

}

window.App.TodoList = TodoList;
