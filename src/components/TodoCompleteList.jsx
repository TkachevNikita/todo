import TodoItem from "./TodoItem";
import '../styles/TodoList.css';
import '../styles/TodoCompleteList.css';

function TodoCompleteList({todos}) {
    return (
      <div className="todo-list">
          <div className="todo-list__title" style={{backgroundColor: 'green'}}>
            Выполнены
          </div>
          <div className="todo-list__body">
            {todos.filter(todo => todo.status === 'completed').map((todo) => 
              <TodoItem todo={todo} key={todo.id}/>
            )}
          </div>
      </div>
    );
  }
  
  export default TodoCompleteList;