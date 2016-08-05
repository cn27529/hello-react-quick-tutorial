class TodoItem extends React.Component {

  render() {

    const { title, completed } = this.props;

    return (
      <li className="list-group-item">
        <input type="checkbox" checked={completed} />
        <span>{title}</span>
        <button type="button" class="btn btn-primary">Primary</button>
      </li>
    );
  }
  
}

window.App.TodoItem = TodoItem;
