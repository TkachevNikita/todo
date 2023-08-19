import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <div className="todo-item">
        <div className="todo-item__content">
          <div className="todo-item__name">
            {props.todo.title}
          </div>
        </div>
      </div>
  );
}

export default TodoItem;
