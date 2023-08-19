import TodoItem from "./TodoItem";
import '../styles/TodoList.css';
import '../styles/TodoPlannedList.css';

function TodoPlannedList({todos, updateItemsState}) {
  const updateFromList = (updatedItem) => {
    updateItemsState(updatedItem);
  }

  return (
    <div className="todo-list">
        <div className="todo-list__title" style={{backgroundColor: 'orange'}}>
          В работе
        </div>
        <div className="todo-list__body">
          {todos.filter(todo => todo.status === 'planned').map((todo) => 
            <TodoItem todo={todo} key={todo.id} updateItemsState={updateFromList}/>
          )}
        </div>
    </div>
    );
  }
  
  export default TodoPlannedList;