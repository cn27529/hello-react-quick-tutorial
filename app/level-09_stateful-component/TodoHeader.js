class TodoHeader extends React.Component{

  render(){

    const { appName, username, todos, ...other } = this.props;
    //運算未完成的todo數
    let todoCount = todos.filter((todo)=> !todo.completed).length;

    //alert(todoCount)

    return(
      <div>
        <h3>{appName}</h3>
        <div className="alert alert-info">
          <strong>Info!</strong>&nbsp;&nbsp;哈囉{username}，你還有 {todoCount} 項尚未完成的待辦事項．
        </div>
      </div>
    )

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
  todoCount: 99
};

window.App.TodoHeader = TodoHeader;
