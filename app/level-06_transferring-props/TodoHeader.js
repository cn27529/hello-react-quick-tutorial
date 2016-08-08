class TodoHeader extends React.Component{
  render(){

    const { appName, username, todos, undones, ...other } = this.props;

    return(
      <div>
        <h3>{appName}</h3>
        <div className="alert alert-info">
          <strong>Info!</strong>&nbsp;&nbsp;哈囉{username}，你還有 {undones.length} 項尚未完成待辦事項.
        </div>
      </div>
    );
  }
}

window.App.TodoHeader = TodoHeader;
