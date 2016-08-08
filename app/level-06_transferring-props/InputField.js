class InputField extends React.Component {
  render() {

    const { appName, username, todos } = this.props;

    let name = "新增"+this.props.appName;

    return(
      <div class="form-group">
        <input type="text" className="form-control" id="usr" placeholder={name} />
      </div>
    );
  }
}

window.App.InputField = InputField;
