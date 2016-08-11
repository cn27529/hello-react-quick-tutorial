const { InputField } = window.App;

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { editable: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  //第一次 render 後，會被呼叫
  componentDidMount(e) {
    console.log("TodoItem componentDidMount")
  }

  complmentWillMount(e){
    console.log("TodoItem complmentWillMount")
  }

  toggleEditMode() {
    this.setState({ editable: !this.state.editable });
  }

  renderViewMode() {
    const {
      title,
      completed,
      onToggle,
      onDelete
    } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle && onToggle(!completed)}
        />
        <span className="title" onDoubleClick={this.toggleEditMode}>{title}</span>
        <button
          type="button"
          className="btn btn-default"
          onClick={() => onDelete && onDelete()}
          >X</button>
      </div>
    );
  }

  renderEditMode() {
    const { title, onUpdate } = this.props;
    return (
      <li className="list-group-item">
        <InputField
          autoFocus
          placeholder="編輯待辦事項"
          value={title}
          onBlur={this.toggleEditMode}
          onKeyDown={(e) => {
            if (e.keyCode === 27) {
              e.preventDefault();
              this.toggleEditMode();
            }
          }}
          onSubmitEditing={(content) => {
            onUpdate && onUpdate(content);
            this.toggleEditMode();
          }}
        />
      </li>
    );
  }

  render() {
    return this.state.editable ?
      this.renderEditMode() :
      this.renderViewMode();
  }
}

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onUpdate: React.PropTypes.func,
  onToggle: React.PropTypes.func,
  onDelete: React.PropTypes.func
};

window.App.TodoItem = TodoItem;
