class InputField extends React.Component {
  render() {
    return(
      <div class="form-group">
        <input type="text" className="form-control" id="usr" placeholder="新增待辦事項" />
      </div>
    );
  }
}

window.App.InputField = InputField;
