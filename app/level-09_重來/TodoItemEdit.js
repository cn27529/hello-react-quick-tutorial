class TodoItemEdit extends React.Component {

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
      <div className="TodoItemEdit">
        <input
          className="edit_input"
          placeholder="編輯待辦事項"
          value={this.state.title}
        />
      </div>
    );
  }

}

window.App.TodoItemEdit = TodoItemEdit;
