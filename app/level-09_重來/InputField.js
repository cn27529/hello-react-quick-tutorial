class InputField extends React.Component {
  render() {

    const { appName, username, todos, ...other } = this.props;

    let input_placeholder = "新增"+appName;

    return(
      <div class="form-group">
        <input type="text" className="form-control" id="usr" placeholder={input_placeholder} />
      </div>
    );
  }
}

window.App.InputField = InputField;
