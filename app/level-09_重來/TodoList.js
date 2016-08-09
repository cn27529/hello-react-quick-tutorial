const { TodoItem } = window.App;
const { TodoItemEdit } = window.App;

class TodoList extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state={
      appName: props.appName,
      username: props.username,
      todos: props.todos,
      onDeleteTodo: props.onDeleteTodo,
      editable: false

    }
  }

  render() {

    //console.log(JSON.stringify(this.props.todos))



    const { todos } = this.state;

    const todoElements = todos.map((todo)=>(
      <li className="list-group-item" >
        <TodoItem
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        editable={false}
        />
        <TodoItemEdit
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        editable={true}
         />
      </li>
    ))

    //console.log(todoElements)

    return (
      <ul className="list-group">
        {todoElements}
      </ul>
    );

  }

}

window.App.TodoList = TodoList;
