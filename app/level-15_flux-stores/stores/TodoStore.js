const { ActionTypes, AppDispatcher } = window.App;

const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

// 1. 管理 todos 資料
let _todos = [];

// 2. 將原本放在 TodoApp 中的業務邏輯，放到 Store 中；
//    或者你也可以開一支 utils/TodoUtils.js 另外放！
const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};

const _updateTodo = (todos, id, title) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = title;
  return todos;
};

const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};


window.App.TodoStore = {
  // 6. 回傳 todos 陣列
  getAll() {
    return _todos;
  },

  // 3. 提供註冊改變事件的 API，並回傳註銷函數
  addChangeListener(callback) {
    _emitter.on(CHANGE_EVENT, callback);
    return () => _emitter.removeListener(CHANGE_EVENT, callback);
  },
  dispatchToken: AppDispatcher.register((action) => {
    switch (action.type) {
      case ActionTypes.LOAD_TODOS_SUCCESS:
        _todos = action.todos;
        _emitter.emit(CHANGE_EVENT);
        break;
      case ActionTypes.CREATE_TODO:
        _todos = _createTodo(_todos, action.title);
        _emitter.emit(CHANGE_EVENT);
        break;
      case ActionTypes.UPDATE_TODO:
        _todos = _updateTodo(_todos, action.id, action.title);
        _emitter.emit(CHANGE_EVENT);
        break;
      case ActionTypes.TOGGLE_TODO:
        _todos = _toggleTodo(_todos, action.id, action.completed);
        _emitter.emit(CHANGE_EVENT);
        break;
      case ActionTypes.DELETE_TODO:
        _todos = _deleteTodo(_todos, action.id);
        _emitter.emit(CHANGE_EVENT);
        break;
    }
  })
};
