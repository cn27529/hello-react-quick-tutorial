const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    );
  }
}

window.App.TodoList = TodoList;
