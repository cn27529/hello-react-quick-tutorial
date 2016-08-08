class TodoHeader extends React.Component{



  render(){

    const { appName, username, todos, undones, ...other } = this.props;

    return(
      <div>
        <h3>{appName}</h3>
        <div className="alert alert-info">
          <strong>Info!</strong>&nbsp;&nbsp;哈囉{username}，你還有 {this.props.todoCount} 項尚未完成待辦事項.
        </div>
      </div>
    );
  }
}

TodoHeader.propTypes = {
  title: React.PropTypes.string,
  username: React.PropTypes.string,
  todoCount: React.PropTypes.number
};

TodoHeader.defaultProps = {
  title: '我的待辦清單',
  username: 'Guest',
  todoCount: "77"
};



window.App.TodoHeader = TodoHeader;
