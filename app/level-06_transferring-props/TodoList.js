const { TodoItem } = window.App;

class TodoList extends React.Component {

  render() {

    const { appName, username, todos, undones, ...other } = this.props;

    return (
      <ul className="list-group">
        <TodoItem title="下班去看電影" completed={true} />
        <TodoItem title="星期一很愛睏" completed={true} />
        <TodoItem title="下個月要回台中" completed={false} />
      </ul>
    );

  }

}

window.App.TodoList = TodoList;
