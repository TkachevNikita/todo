import TodoItem from "./TodoItem";
import '../styles/TodoList.css';
import '../styles/TodoCompleteList.css';

function TodoCompleteList({todos, updateItemsState}) {

    const filteredTodos = todos.filter(todo => todo.status === 'completed');

    const updateFromList = (updatedItem) => {
        updateItemsState(updatedItem);
    }

    return (
      <div className="todo-list">
          <div className="todo-list__title" style={{backgroundColor: 'green'}}>
            Выполнены
          </div>
          <div className="todo-list__body">
            {filteredTodos.map((todo) => 
              <TodoItem todo={todo} key={todo.id} updateItemsState={updateFromList}/>
            )}
          </div>
      </div>
    );
  }
  
  export default TodoCompleteList;