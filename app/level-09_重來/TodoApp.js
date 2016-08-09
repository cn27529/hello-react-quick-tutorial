const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

//記錄刪除的記錄
let deleted_ids = [];

// 7. 將刪除邏輯抽成一個 function
const _deleteTodo = (todos, id) => {
  //這個todos是state的

  //取得這個 todos 的索引列位置
  const idx = todos.findIndex((todo) => todo.id === id);

  if (idx < 0 ) return todos; //沒有索引, 返回目前的state的todos

  //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
  //注释：该方法会改变原始数组。
  todos.splice(idx, 1);

  deleted_ids.push(id); //記錄己被刪除的id

  //console.log('_deleted_ids:'+deleted_ids.length);
  console.log(JSON.stringify(deleted_ids));

  return todos;

};

class TodoApp extends React.Component {

/*
  constructor(props, context){
    super(props, context);
    this.state={
      appName: props.appName,
      username: props.username,
      todos: props.todos,
      onDeleteTodo: props.onDeleteTodo
    }
  }
*/

  render() {

    const { appName, username, todos, ...other } = this.props;

    return (

      <div className="jumbotron">
        <TodoHeader {...this.props} />
        <InputField appName={appName} username={username} todos={todos} />
        <TodoList appName={appName} username={username} todos={todos} onDeleteTodo={
          (id) => this.setState({
            todos: _deleteTodo(todos, id)
          })
        }
        />
      </div>

    )

  }
}

window.App.TodoApp = TodoApp;
