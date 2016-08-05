class TodoHeader extends React.Component{
  render(){
    return(
      <div>
        <h3>我的待辦清單</h3>
        <div className="alert alert-info">
          <strong>Info!</strong> 哈囉，Jason：你有 99 項未完成待辦事項.
        </div>
      </div>
    );
  }
}

window.App.TodoHeader = TodoHeader;
