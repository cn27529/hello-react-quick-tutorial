class InputField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: props.value || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  //第一次 render 後，會被呼叫
  componentDidMount() {
    console.log("InputField componentDidMount")
  }

  complmentWillMount(){
    console.log("InputField complmentWillMount")
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {

    const {
      onKeyDown,
      onSubmitEditing
    } = this.props;

    const { value } = this.state;

    switch (e.keyCode) {
      case 13:
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value);
        }
        this.setState({ value: '' });
        break;
    }
    onKeyDown && onKeyDown(e);
  }

  render() {
    return (
      <div class="form-group">
        <input
          //{...this.props}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="form-control"
        />
      </div>
    );
  }
}

InputField.propTypes = {
  onSubmitEditing: React.PropTypes.func
};

window.App.InputField = InputField;
