const _createTodo = ...;
const _updateTodo = ...;
const _toggleTodo = ...;
const _deleteTodo = ...;

window.App.reducers.todos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODOS_SUCCESS:
      return action.todos;
    case ActionTypes.CREATE_TODO:
      return _createTodo(state, action.title);
    case ActionTypes.UPDATE_TODO:
      return _updateTodo(state, action.id, action.title);
    case ActionTypes.TOGGLE_TODO:
      return _toggleTodo(state, action.id, action.completed);
    case ActionTypes.DELETE_TODO:
      return _deleteTodo(state, action.id);
    default:
      return state;
  }
};
