const { InputField } = window.App;

class TodoItem extends React.Component {

  constructor(props, context){
    super(props, context);
    // 1. 使用 class constructor (類別建構子) 初始元件狀態
    this.state = {editable: false, edit_state: false };
    // 2-1. 更新元件狀態來切換模式
    this.toggleEditMode = this.toggleEditMode.bind(this);

  }

  toggleEditMode(){
    // 2. 更新元件狀態來切換模式
    this.setState({ editable: !this.state.editable });
    //alert(this.state.editable);
  }

  renderView() {
    const { title, completed } = this.props;
    // 1. 當刪除按鈕被點選，觸發上層元件 (TodoList) 傳遞的 onDelete callback
    const{ onDelete}=this.props;
    // 3. 將原本渲染「瀏覽模式」的程式，移至這裡
    return (
      <li className="list-group-item">
        <input type="checkbox" checked={completed} />
        <span onClick={this.toggleEditMode} >{title}</span>
        <button type="button" className="btn btn-default" onClick={() => onDelete && onDelete()} >X</button>
      </li>
    );

  }

  renderEdit(){
    const { title, completed } = this.props;
    // 4. 「編輯模式」使用 html input 元件
    return (
      <li className="list-group-item">
      <input type="checkbox" checked={completed} />

      <input
        className="edit_input"
        autoFocus                    // 5. autoFocus 讓使用者切換到編輯模式後，可以立即編打
        placeholder="編輯待辦事項"
        value={this.props.title}
        onBlur={this.toggleEditMode} // 8. 當使用者點擊其他地方，則切換為「瀏覽模式」
        onKeyDown={(e) => {          // 9. 當使用者按下 ESC，則切換為「瀏覽模式」
          //alert(e.keyCode);
          if (e.keyCode == 27) {
            //e.preventDefault();
            this.toggleEditMode();
          }
          else {
            //alert(11111111);
          }
        }}
      />

      <button type="button" className="btn btn-default">X</button>
      </li>
    );

  }



  render() {
    // 2. 判斷目前 this.state.editable 模式為何，渲染不同的畫面
    return this.state.editable ? this.renderEdit() : this.renderView();
  }

}

window.App.TodoItem = TodoItem;
