class TodoItem extends React.Component {

  render() {

    const { title, completed } = this.props;

    return (
      <li className="list-group-item">
        <input type="checkbox" checked={completed} />
        <span>{title}</span>
        <button type="button" className="btn btn-default">X</button>
      </li>
    );
  }

}

window.App.TodoItem = TodoItem;
