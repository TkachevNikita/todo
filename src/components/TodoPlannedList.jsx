import TodoItem from "./TodoItem";
import '../styles/TodoList.css';
import '../styles/TodoPlannedList.css';

function TodoPlannedList({todos}) {
    return (
      <div className="todo-list">
          <div className="todo-list__title" style={{backgroundColor: 'orange'}}>
            Запланированы
          </div>
          <div className="todo-list__body">
            {todos.filter(todo => todo.status === 'planned').map((todo) => 
              <TodoItem todo={todo} key={todo.id}/>
            )}
          </div>
      </div>
    );
  }
  
  export default TodoPlannedList;