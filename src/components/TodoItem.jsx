import '../styles/TodoItem.css';
import { useState } from 'react';

function TodoItem({todo, updateItemsState}) {

  // const [currentItem, setCurrentItem] = useState(null);

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dragStartHandler(e, item) {
      e.dataTransfer.setData('text/plain', JSON.stringify(item));
      // console.log(currentItem)
  }

  function dragOverHandler(e) {
      e.preventDefault();
      if (e.target.className === 'todo-item') {
          e.target.style.boxShadow = '0 2px 3px gray';
      }
  }

  function dragLeaveHandler(e) {
      e.target.style.boxShadow = 'none';
  }

  function dropHandler(e, item) {
      e.preventDefault();
      const newItem = JSON.parse(e.dataTransfer.getData('text/plain'));
      newItem.status = item.status;
      updateItemsState(newItem);
      e.target.style.boxShadow = 'none';
  }

  return (
    <div
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, todo)}
      onDragEnd={e => dragEndHandler(e)}
      onDrop={e => dropHandler(e, todo)}
      draggable={true} 
      className="todo-item"
    >
        <div className="todo-item__content">
          <div className="todo-item__name">
            {todo.title}
          </div>
        </div>
      </div>
  );
}

export default TodoItem;
