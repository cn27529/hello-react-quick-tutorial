class TodoItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <input type="checkbox" />
        <span>Item 1</span>
        <button>x</button>
      </li>
    );
  }
}

window.App.TodoItem = TodoItem;
