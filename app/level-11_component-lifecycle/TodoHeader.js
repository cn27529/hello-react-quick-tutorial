class TodoHeader extends React.Component {

  //第一次 render 後，會被呼叫
  componentDidMount(e) {
    console.log("TodoHeader componentDidMount")
  }

  complmentWillMount(e){
    console.log("TodoHeader complmentWillMount")
  }


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
        <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
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
