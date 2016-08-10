class TodoHeader extends React.Component {
  render() {
    const {
      title,
      username,
      todoCount
    } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <div className="alert alert-info">
          <strong>Info!</strong>&nbsp;&nbsp;哈囉{username}，你還有 {todoCount} 項尚未完成的待辦事項．
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
  todoCount: 0
};

window.App.TodoHeader = TodoHeader;
