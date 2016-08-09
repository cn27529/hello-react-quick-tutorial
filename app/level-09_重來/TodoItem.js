class TodoItem extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      editable: false,
      title: props.title,
      completed: props.completed
    };
  }

  render() {

    return (
      <div className="TodoItem">
        <input type="checkbox" checked={this.state.completed} />
        <span>{this.state.title}</span>
        <button
          type="button"
          className="btn btn-default"
          >X</button>
      </div>
    );

  }

}

window.App.TodoItem = TodoItem;
