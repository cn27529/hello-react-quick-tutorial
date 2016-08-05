const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <TodoItem title="123" completed={true} />
        <TodoItem title="456" completed={true} />
        <TodoItem title="789" completed={false} />
      </ul>
    );
  }
}

window.App.TodoList = TodoList;
