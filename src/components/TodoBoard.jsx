import TodoItem from "./TodoItem";
import '../styles/TodoList.css';
import '../styles/TodoCompleteList.css';

function TodoBoard({todos, updateItemsState, boardTitle, color}) {

    const updateFromList = (updatedItem) => {
        updateItemsState(updatedItem);
    }

    return (
      <div className="todo-list">
          <div className="todo-list__title" style={{backgroundColor: color}}>
            {boardTitle}
          </div>
          <div className="todo-list__body">
            {todos.map((todo) => 
              <TodoItem todo={todo} key={todo.id} updateItemsState={updateFromList}/>
            )}
          </div>
      </div>
    );
  }
  
  export default TodoBoard;